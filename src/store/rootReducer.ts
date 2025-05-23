import { combineReducers } from "@reduxjs/toolkit";

import languageReducer from "./slices/languageSlice";
import aboutReducer from "./slices/aboutComplexSlice";
import themeReducer from "./slices/themeSlice";
import aboutViewsReducer from "./slices/AboutViewsSlices";
import companyReducer from "./slices/companySlice";
import newsReducer from "./slices/newsSlice";

const rootReducer = combineReducers({
  language: languageReducer,
  about: aboutReducer,
  theme: themeReducer,
  aboutViews: aboutViewsReducer,
  company: companyReducer,
  news: newsReducer,
});

export default rootReducer;
