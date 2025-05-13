import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from "@reduxjs/toolkit";
import { RootState } from "../index";

export const fetchComplexInfo = createAsyncThunk(
  "about/fetchInfo",
  async () => {
    const response = await new Promise<string>((resolve) =>
      setTimeout(
        () =>
          resolve(
            "ЭКСПОФОРУМ — крупнейший в СЗФО России конгрессно-выставочный центр..."
          ),
        1000
      )
    );
    return response;
  }
);

interface AboutState {
  info: string;
  loading: boolean;
}

const initialState: AboutState = {
  info: "",
  loading: false,
};

const aboutSlise = createSlice({
  name: "about",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchComplexInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchComplexInfo.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.info = action.payload;
          state.loading = false;
        }
      );
  },
});

export default aboutSlise.reducer;

const selectAboutInfo = (state: RootState) => state.about.info;

export const selectInfoLength = createSelector(
  [selectAboutInfo],
  (info) => info.length
);
