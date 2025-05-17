import { combineReducers } from "@reduxjs/toolkit";

import languageReducer from "./slices/languageSlice";
import aboutReducer from "./slices/aboutComplexSlice";
import themeReducer from "./slices/themeSlice";
import aboutViewsReducer from "./slices/AboutViewsSlices";

const rootReducer = combineReducers({
  language: languageReducer,
  about: aboutReducer,
  theme: themeReducer,
  aboutViews: aboutViewsReducer,
});

export default rootReducer;
