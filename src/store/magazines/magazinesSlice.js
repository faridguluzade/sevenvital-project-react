import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getMagazines as getMagazinesApi } from "../../services/apiMagazines";

export const fetchMagazines = createAsyncThunk(
  "magazines/fetchMagazines",
  async () => {
    const magazines = await getMagazinesApi();
    return magazines;
  }
);

const initialState = {
  magazines: [],
  status: "idle",
  error: "",
};

const magazinesSlice = createSlice({
  name: "magazines",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMagazines.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMagazines.fulfilled, (state, action) => {
        state.status = "idle";
        state.magazines = action.payload;
      })
      .addCase(fetchMagazines.rejected, (state, action) => {
        state.error = "error";
        state.error = action.error.message;
      });
  },
});

// Selector function
export const getMagazines = (state) => state.magazines;

export default magazinesSlice.reducer;
