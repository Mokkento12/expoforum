import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; // Только типизация

interface CompanyState {
  employees: number;
  isCertified: boolean;
  loading: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CompanyState = {
  employees: 100,
  isCertified: false,
  loading: "idle",
  error: null,
};

export const fetchCompanyData = createAsyncThunk(
  "company/fetchCompanyData",
  async () => {
    const response = await new Promise<{
      employees: number;
      isCertified: boolean;
    }>((resolve) =>
      setTimeout(() => resolve({ employees: 120, isCertified: true }), 1000)
    );
    return response;
  }
);
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

  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanyData.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(fetchCompanyData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.employees = action.payload.employees;
        state.isCertified = action.payload.isCertified;
      })
      .addCase(fetchCompanyData.rejected, (state) => {
        state.loading = "failed";
        state.error = "Ошибка загрузки данных";
      });
  },
});

export const { addEmployee, removeEmployee, setCertified } =
  companySlice.actions;
export default companySlice.reducer;
