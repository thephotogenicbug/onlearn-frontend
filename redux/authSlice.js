import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const API = import.meta.env.VITE_BACKEND_URL;

export const registerAdmin = createAsyncThunk(
  `auth/registerAdmin`,
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API}/admin/admin-register`, userData);
      return res.data;
    } catch (error) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: Cookies.get("token") || null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        Cookies.set("token", action.payload.token);
      })
      .addCase(registerAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default authSlice.reducer;
