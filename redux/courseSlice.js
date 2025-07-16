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

export const getCoursesAdmin = createAsyncThunk(
  `course/displayCourseAdmin`,
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API}/course/get-course-admin`, {
        withCredentials: true,
      });
      if (!res.data.success) throw new Error(res.data.message);
      return res.data.courses;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

export const getCoursePublic = createAsyncThunk(
  `course/getCoursePublic`,
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API}/course/get-course-public`);
      if (!res.data.success) throw new Error(res.data.message);
      return res.data.courses;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

export const deleteCourseAdmin = createAsyncThunk(
  `course/deleteCourseAdmin`,
  async (deleteId, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `${API}/course/delete-course/${deleteId}`,
        {
          withCredentials: true,
        }
      );
      if (!res.data.success) throw new Error(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState: {
    courses: [],
    courses_public: [],
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
      // create new course
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
      })
      // display courses - admin
      .addCase(getCoursesAdmin.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getCoursesAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
        console.log(action.payload);
      })
      .addCase(getCoursesAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // display course public
      .addCase(getCoursePublic.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getCoursePublic.fulfilled, (state, action) => {
        state.loading = false;
        state.courses_public = action.payload;
      })
      .addCase(getCoursePublic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // delete course
      .addCase(deleteCourseAdmin.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteCourseAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = state.courses.filter(
          (course) => course._id !== action.payload._id
        );
      })
      .addCase(deleteCourseAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { resetCourseState } = courseSlice.actions;
export default courseSlice.reducer;
