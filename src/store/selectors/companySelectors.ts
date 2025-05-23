import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../index";

const selectCompany = (state: RootState) => state.company;

export const selectCompanyStatus = createSelector(
  [selectCompany],
  (company) => {
    if (company.employees > 100) return "Большая компания";
    if (company.employees > 50) return "Средняя компания";
    return "Маленькая компания";
  }
);
