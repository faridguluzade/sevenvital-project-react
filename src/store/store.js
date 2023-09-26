import { configureStore } from "@reduxjs/toolkit";

import magazinesReducer from "./magazines/magazinesSlice";
import productsReducer from "./products/productsSlice";
import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice";

const store = configureStore({
  reducer: {
    magazines: magazinesReducer,
    products: productsReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
