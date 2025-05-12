import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languageSlice";
import aboutReducer from "./slices/aboutComplexSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    about: aboutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
