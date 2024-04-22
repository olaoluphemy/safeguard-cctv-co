import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  couponCode: "PH3-DEV",
  isDiscounted: false,
  cart: [],
};

function formatNumber(num) {
  return new Intl.NumberFormat("en-US").format(num);
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart = [...state.cart, action.payload];
    },

    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity = item.quantity + 1;
      item.total = formatNumber(
        item.quantity * Number(item.price.replaceAll(",", "")),
      );
    },

    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      if (item.quantity === 1) return;
      item.quantity = item.quantity - 1;
      item.total = formatNumber(
        item.quantity * Number(item.price.replaceAll(",", "")),
      );
    },

    deleteCartItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    applyDiscount(state, action) {
      if (action.payload.toUpperCase() === state.couponCode)
        state.isDiscounted = true;

      // console.log(current(state));
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteCartItem,
  applyDiscount,
  clearCart,
} = cartSlice.actions;
