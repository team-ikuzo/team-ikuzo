import { configureStore } from "@reduxjs/toolkit";
import createPostSlice from "../slices/createPostSlice";
import updateProfileSlice from "../slices/updateProfileSlice";

const store = configureStore({
  reducer: {
    postSlice: createPostSlice,
    profileSlice: updateProfileSlice,
  },
});

export default store;
