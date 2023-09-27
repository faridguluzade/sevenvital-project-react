import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import {
  addItemToCart as addItemToCartApi,
  getCartByUserId,
  deleteItem as deleteItemApi,
  updateCartItem,
} from "../../services/apiCart";

const initialState = {
  cart: [],
  status: "idle",
  error: null,
};

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (cartData) => {
    const data = await addItemToCartApi(cartData);
    return data;
    // dispatch(cartSlice.actions.addItem(cartData));
  }
);

export const getCartById = createAsyncThunk(
  "cart/getCartById",
  async (userId) => {
    const data = await getCartByUserId(userId);
    return data;
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (id, { dispatch }) => {
    dispatch(cartSlice.actions.deleteItem(id));
    await deleteItemApi(id);
  }
);

export const increaseCartItemQuantity = createAsyncThunk(
  "cart/increaseCartItemQuantity",
  async ({ userId, productId, price, quantity }, { dispatch }) => {
    const updatedObj = {
      quantity: quantity + 1,
      totalPrice: price * quantity,
    };

    dispatch(cartSlice.actions.increaseItemQuantity(productId));

    await updateCartItem(userId, productId, updatedObj);
  }
);

export const decreaseCartItemQuantity = createAsyncThunk(
  "cart/decreaseCartItemQuantity",
  async ({ userId, productId, price, quantity }, { dispatch }) => {
    const updatedObj = {
      quantity: quantity - 1,
      totalPrice: price * quantity,
    };

    dispatch(cartSlice.actions.decreaseItemQuantity(productId));

    await updateCartItem(userId, productId, updatedObj);
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = new item or existing item
      const item = state.cart.find(
        (item) => item.productId === action.payload.productId
      );

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
    increaseItemQuantity(state, action) {
      // payload = product id
      const item = state.cart.find((item) => item.productId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreaseItemQuantity(state, action) {
      // payload = product id
      const item = state.cart.find((item) => item.productId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.price;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // get Item from cart
      .addCase(getCartById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCartById.fulfilled, (state, action) => {
        state.status = "idle";
        state.cart = action.payload;
      })
      .addCase(getCartById.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
        toast.error(action.error.message);
      })

      // Add item to the cart
      .addCase(addItemToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.status = "idle";
        state.cart = action.payload;
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
        toast.error(state.error);
      })
      // Delete item from cart
      .addCase(deleteCartItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
        toast.error(state.error);
      });
  },
});

export default cartSlice.reducer;

// Selector function
export const selectCart = (state) => state.cart.cart;

export const getCart = createSelector([selectCart], (cart) => {
  return cart.map((item) => {
    const { products, ...rest } = item;
    return { ...rest, ...products };
  });
});

export const getTotalPrice = (state) => {
  return state.cart.cart.reduce((acc, curr) => {
    return acc + curr.totalPrice;
  }, 0);
};
