import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; // Только типизация

interface CompanyState {
  employees: number;
  isCertified: boolean;
}

const initialState: CompanyState = {
  employees: 100,
  isCertified: false,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    addEmployee: (state) => {
      state.employees += 1;
    },
    removeEmployee: (state) => {
      if (state.employees > 0) state.employees -= 1;
    },
    setCertified: (state, action: PayloadAction<boolean>) => {
      state.isCertified = action.payload;
    },
  },
});

export const { addEmployee, removeEmployee, setCertified } =
  companySlice.actions;
export default companySlice.reducer;
