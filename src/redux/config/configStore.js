import { configureStore } from "@reduxjs/toolkit";
import createPostSlice from "../slices/createPostSlice";

const store = configureStore({
  reducer: {
    postSlice: createPostSlice,
  },
});

export default store;
