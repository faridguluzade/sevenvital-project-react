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
  deleteAll,
} from "../../services/apiCart";

const initialState = {
  cart: [],
  loadingProducts: {},
  error: null,
};

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (cartData, { getState, dispatch }) => {
    // cartData = new item or existing item
    const item = getState().cart.cart.find(
      (item) => item.productId === cartData.productId
    );

    if (item) {
      const quantity = item.quantity + 1;
      const updatedData = {
        quantity,
        totalPrice: quantity * item.price,
      };

      const data = await updateCartItem(item.id, updatedData);
      dispatch(cartSlice.actions.updateItem(data));
    } else {
      const data = await addItemToCartApi(cartData);
      return data;
    }
  }
);

export const getCartById = createAsyncThunk(
  "cart/getCartById",
  async (userId) => {
    const data = await getCartByUserId(userId);
    return data;
  }
);

export const increaseItemQuantity = createAsyncThunk(
  "cart/increaseItemQuantity",
  async (obj, { dispatch }) => {
    obj.quantity++;
    obj.totalPrice = obj.quantity * obj.price;

    const data = await updateCartItem(obj.id, obj);

    dispatch(cartSlice.actions.updateItem(data));
  }
);

export const decreaseItemQuantity = createAsyncThunk(
  "cart/decreaseItemQuantity",
  async (obj, { dispatch }) => {
    obj.quantity--;
    obj.totalPrice = obj.quantity * obj.price;

    if (obj.quantity === 0) {
      dispatch(cartSlice.actions.deleteItem(obj.id));
      await deleteItemApi(obj.id);
    } else {
      const data = await updateCartItem(obj.id, obj);
      dispatch(cartSlice.actions.updateItem(data));
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (id, { dispatch }) => {
    await deleteItemApi(id);
    dispatch(cartSlice.actions.deleteItem(id));
  }
);

export const deleteAllCart = createAsyncThunk(
  "cart/deleteAllCart",
  async (userId, { dispatch }) => {
    await deleteAll(userId);
    dispatch(cartSlice.actions.clearCart());
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      // payload = product id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    updateItem(state, action) {
      // Find the index of the updated product in the state and update it
      const updatedItemIndex = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (updatedItemIndex !== -1) {
        state.cart[updatedItemIndex] = {
          ...state.cart[updatedItemIndex],
          ...action.payload,
        };
      }
    },

    clearCart(state) {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // get Item from cart
      .addCase(getCartById.pending, (state) => {})
      .addCase(getCartById.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(getCartById.rejected, (state, action) => {
        state.error = action.error.message;
        toast.error(action.error.message);
      })

      // Add item to the cart
      .addCase(addItemToCart.pending, (state, action) => {
        const productId = action.meta.arg.productId;
        state.loadingProducts[productId] = true;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        const productId = action.meta.arg.productId;
        state.loadingProducts[productId] = false;

        if (action.payload) {
          state.cart.push(action.payload);
        }
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        const productId = action.meta.arg.productId;
        state.loadingProducts[productId] = false;

        state.error = action.error.message;
        toast.error(state.error);
      })
      // Delete item from cart
      .addCase(deleteCartItem.pending, (state) => {})
      .addCase(deleteCartItem.fulfilled, (state, action) => {})
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.error = action.error.message;
        toast.error(state.error);
      });
  },
});

export const { clearCart } = cartSlice.actions;

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
