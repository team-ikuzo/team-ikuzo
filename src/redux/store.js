import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import { sampleSlice } from './sampleSlice';

const store = configureStore({
  reducer: {
    sample: sampleSlice.reducer,
    auth: authSlice.reducer
  }
});

export { store };
