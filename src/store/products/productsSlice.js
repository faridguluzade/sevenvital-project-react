import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getProducts as getProductsApi } from "../../services/apiProducts";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await getProductsApi();
    return products;
  }
);

const initialState = {
  products: [],
  status: "idle",
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = "error";
        state.error = action.error.message;
      });
  },
});

// Selector function
export const getProducts = (state) => state.products;

export default productsSlice.reducer;
