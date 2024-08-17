import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePopupVideoId: null,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setActivePopupVideoId: (state, action) => {
      state.activePopupVideoId = action.payload;
    },
  },
});

export const { setActivePopupVideoId } =
  popupSlice.actions;
export default popupSlice.reducer;
