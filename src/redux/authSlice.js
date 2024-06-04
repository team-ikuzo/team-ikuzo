import { createSlice } from '@reduxjs/toolkit';

const getInitialData = () => {
  return { signIn: false };
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState: getInitialData(),
  reducers: {
    setSignIn: (state, action) => {
      // action.payload =>
      console.log(action.payload);
      state.signIn = action.payload;
      console.log(state.signIn);
    }
  }
});

export { authSlice };
export const { setSignIn } = authSlice.actions;
