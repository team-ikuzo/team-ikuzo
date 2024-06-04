import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import { sampleSlice } from './sampleSlice';
import { postSlice } from './slices/postSlice';

const store = configureStore({
  reducer: {
    sample: sampleSlice.reducer,
    auth: authSlice.reducer,
    post: postSlice.reducer
  }
});

export { store };
