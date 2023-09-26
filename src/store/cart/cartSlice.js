import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = new item or existing item
      const item = state.cart.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity++;
        item.totalPrice = item.price * item.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteItem(state, action) {
      // payload = product id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;

// Selector function
export const getCart = (state) => state.cart.cart;
