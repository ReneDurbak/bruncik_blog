import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLoginVisible: false,
  },
  reducers: {
    showLogin: (state) => {
      state.isLoginVisible = true;
    },
    hideLogin: (state) => {
      state.isLoginVisible = false;
    },
    toggleLogin: (state) => {
      state.isLoginVisible = !state.isLoginVisible;
    },
  },
});

export const { showLogin, hideLogin, toggleLogin } = uiSlice.actions;

export default uiSlice.reducer;
