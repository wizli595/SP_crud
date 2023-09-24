import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/user/postSlice";

const store = configureStore({
  reducer: {
    post: postSlice,
  },
});
export default store;
