import { configureStore } from "@reduxjs/toolkit";

import magazinesReducer from "./magazines/magazinesSlice";
import productsReducer from "./products/productsSlice";

const store = configureStore({
  reducer: {
    magazines: magazinesReducer,
    products: productsReducer,
  },
});

export default store;
