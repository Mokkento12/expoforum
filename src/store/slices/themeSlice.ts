import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

interface ThemeState {
  mode: Theme;
}

const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem("theme");
  return saved === "dark" ? "dark" : "light";
};

const initialState: ThemeState = {
  mode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
    },

    setTheme: (state, action: PayloadAction<Theme>) => {
      state.mode = action.payload;
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
