import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import courseReducer from "./courseSlice";
import userAuthReducer from "./user_authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    user_auth: userAuthReducer,
  },
});

export default store;
