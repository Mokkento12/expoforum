import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languageSlice";
import aboutReducer from "./slices/aboutComplexSlice";
import themeReducer from "./slices/themeSlice";
import aboutViewsReducer from "./slices/AboutViewsSlices";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    about: aboutReducer,
    theme: themeReducer,
    aboutViews: aboutViewsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
