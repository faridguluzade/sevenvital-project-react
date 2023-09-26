import { configureStore } from "@reduxjs/toolkit";

import magazinesReducer from "./magazines/magazinesSlice";
import productsReducer from "./products/productsSlice";
import userReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    magazines: magazinesReducer,
    products: productsReducer,
    user: userReducer,
  },
});

export default store;
