import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const API = import.meta.env.VITE_BACKEND_URL;

export const createNewCourse = createAsyncThunk(
  `course/createCourse`,
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API}/course/new-course`, userData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
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

const courseSlice = createSlice({
  name: "course",
  initialState: {
    course: null,
    token: Cookies.get("token") || null,
    loading: false,
    error: null,
  },
  reducers: {
    resetCourseState: (state) => {
      state.course = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.course = action.payload.course;
      })
      .addCase(createNewCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { resetCourseState } = courseSlice.actions;
export default courseSlice.reducer;
