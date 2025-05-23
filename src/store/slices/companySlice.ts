import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CompanyState {
  employees: number;
  isCertified: boolean;
  loading: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const initialCompanyState: CompanyState = {
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

const savedState = localStorage.getItem("company");

const persistedInitialState: CompanyState = savedState
  ? JSON.parse(savedState)
  : initialCompanyState;

const companySlice = createSlice({
  name: "company",
  initialState: persistedInitialState,
  reducers: {
    addEmployee: (state) => {
      state.employees += 1;
      localStorage.setItem("company", JSON.stringify(state));
    },
    removeEmployee: (state) => {
      if (state.employees > 0) {
        state.employees -= 1;
        localStorage.setItem("company", JSON.stringify(state));
      }
    },
    setCertified: (state, action: PayloadAction<boolean>) => {
      state.isCertified = action.payload;
      localStorage.setItem("company", JSON.stringify(state));
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
        state.error = null;
        localStorage.setItem("company", JSON.stringify(state));
      })
      .addCase(fetchCompanyData.rejected, (state) => {
        state.loading = "failed";
        state.error = "Ошибка загрузки данных";
        localStorage.setItem("company", JSON.stringify(state));
      });
  },
});

export const { addEmployee, removeEmployee, setCertified } =
  companySlice.actions;

export default companySlice.reducer;
