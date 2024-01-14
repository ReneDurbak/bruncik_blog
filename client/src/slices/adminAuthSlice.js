import { createSlice } from '@reduxjs/toolkit';

const adminAuthSlice = createSlice({
  name: 'adminAuth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    setAuthStatus: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setAuthStatus } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
