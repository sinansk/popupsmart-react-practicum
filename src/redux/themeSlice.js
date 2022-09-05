import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: null,
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      if (state.theme === "dark") {
        state.theme = "light";
      } else {
        state.theme = "dark";
      }
    },
  },
});
export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
