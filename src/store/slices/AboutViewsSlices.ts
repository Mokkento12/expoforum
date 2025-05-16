import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../index";

interface SectionViews {
  section: string;
  views: number;
}

interface AboutViewsState {
  views: SectionViews[];
}

const initialState: AboutViewsState = {
  views: [
    { section: "intro", views: 3 },
    { section: "history", views: 8 },
    { section: "contacts", views: 2 },
  ],
};

const aboutViewsSlice = createSlice({
  name: "aboutViews",
  initialState,
  reducers: {
    incrementViews: (state, action: PayloadAction<string>) => {
      const section = state.views.find((v) => v.section === action.payload);
      if (section) {
        section.views += 1;
      } else {
        state.views.push({ section: action.payload, views: 1 });
      }
    },
  },
});

export const { incrementViews } = aboutViewsSlice.actions;
export default aboutViewsSlice.reducer;

export const selectViews = (state: RootState) => state.aboutViews.views;

export const selectTotalViews = createSelector([selectViews], (views) =>
  views.reduce((sum, v) => sum + v.views, 0)
);

export const selectPopularSections = createSelector([selectViews], (views) =>
  views.filter((v) => v.views > 5)
);
