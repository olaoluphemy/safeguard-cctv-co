import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  totalPurchase: null,
  orderId: null,
  deliveryStatus: "pending",
  paymentOption: "",
  deliveryDetails: {},
  loadingStatus: "idle",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setPaymentOption(state, action) {
      state.paymentOption = action.payload;
      console.log(current(state));
    },

    setTotalPurchase(state, action) {
      state.totalPurchase = action.payload;
      console.log(current(state));
    },

    completeOrder(state, action) {
      state.deliveryDetails = action.payload;
    },

    setLoadingStatus(state, action) {
      state.loadingStatus = action.payload;

    },
  },
});

export default orderSlice.reducer;

export const {
  setPaymentOption,
  setTotalPurchase,
  completeOrder,
  setLoadingStatus,
} = orderSlice.actions;
