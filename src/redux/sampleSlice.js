import { createSlice } from '@reduxjs/toolkit';

const getInitialData = () => {
  return [];
};

const sampleSlice = createSlice({
  name: 'sampleSlice',
  initialState: {
    data: getInitialData()
  },
  reducers: {
    setData: (state, action) => {
      // action.payload =>
      state.data = action.payload;
    }
  }
});

export default sampleSlice;
export const { setData } = sampleSlice.actions;
