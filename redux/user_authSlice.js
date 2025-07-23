import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const API = import.meta.env.VITE_BACKEND_URL;

export const userRegister = createAsyncThunk(
  `user/userRegister`,
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API}/user/user-register`, userData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.data.success) {
        throw new Error(res.data.message);
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  `user/userLogin`,
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API}/user/user-login`, userData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.data.success) {
        throw new Error(res.data.message);
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const user_authSlice = createSlice({
  name: "user_auth",
  initialState: {
    user: null,
    token: Cookies.get("token") || null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // register user
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        Cookies.set("token", action.payload.token);
      })
      .addCase(userRegister.rejected, (state, action) => {
        (state.loading = false),
          (state.error = action.payload || action.error.message);
      })
      // user login
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        Cookies.set("token", action.payload.token);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default user_authSlice.reducer;
