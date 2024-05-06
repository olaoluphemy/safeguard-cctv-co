import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPurchase: null,
  orderId: null,
  deliveryStatus: "pending",
  paymentOption: "",
  deliveryDetails: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setPaymentOption(state, action) {
      state.paymentOption = action.payload;
    },

    setTotalPurchase(state, action) {
      state.totalPurchase = action.payload;
    },

    completeOrder: {
      prepare(data) {
        const orderId = Date.now();

        return {
          payload: { data, orderId },
        };
      },

      reducer(state, action) {
        state.deliveryDetails = action.payload.data;
        state.orderId = action.payload.orderId;
      },
    },
  },
});

export default orderSlice.reducer;

export const { setPaymentOption, setTotalPurchase, completeOrder } =
  orderSlice.actions;
