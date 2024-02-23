import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getSearchedProducts,
  getProducts as getProductsApi,
  getFilteredProducts,
} from "../../services/apiProducts";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await getProductsApi();
    return products;
  }
);

export const fetchSearchedProducts = createAsyncThunk(
  "product/fetchSearchedProducts",
  async (searchValue) => {
    const products = await getSearchedProducts(searchValue);
    return products;
  }
);

export const fetchFilteredProducts = createAsyncThunk(
  "product/fetchFilteredProducts",
  async (filterData) => {
    const products = await getFilteredProducts(filterData);

    return products;
  }
);

const initialState = {
  products: [],
  count: 0,
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
        state.error = "";
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "";
        state.error = action.error.message;
      });

    builder
      .addCase(fetchSearchedProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchedProducts.fulfilled, (state, action) => {
        state.error = "";
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchSearchedProducts.rejected, (state, action) => {
        state.status = "";
        state.error = action.error.message;
      });

    builder
      .addCase(fetchFilteredProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilteredProducts.fulfilled, (state, action) => {
        console.log("SLICE", action.payload.data, action.payload.count);

        state.error = "";
        state.status = "succeeded";

        state.products = action.payload.data;
        state.count = action.payload.count;
      })
      .addCase(fetchFilteredProducts.rejected, (state, action) => {
        state.status = "";
        state.error = action.error.message;
      });
  },
});

// Selector function
export const getProducts = (state) => state.products;

export default productsSlice.reducer;
