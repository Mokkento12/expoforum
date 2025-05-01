import { createSlice } from "@reduxjs/toolkit";

interface LanguageState {
  current: "en" | "ru";
}

const initialState: LanguageState = {
  current: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.current = state.current === "en" ? "ru" : "en";
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
