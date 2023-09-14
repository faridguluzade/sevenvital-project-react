import { configureStore } from "@reduxjs/toolkit";

import magazinesReducer from "./magazines/magazinesSlice";

const store = configureStore({
  reducer: {
    magazines: magazinesReducer,
  },
});

export default store;
