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
      // console.log(current(state));
    },

    setTotalPurchase(state, action) {
      state.totalPurchase = action.payload;
      // console.log(current(state));
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
        state.loadingStatus = "idle";
        state.orderId = action.payload.orderId;

        console.log(current(state));
      },
    },

    // completeOrder: {
    //   prepare({ details }) {
    //     const orderId = Date.now();
    //     return {
    //       payload: { details, orderId },
    //     };
    //   },

    //   reducer(state, action) {
    //     state.deliveryDetails = action.payload
    //     .details;
    //     state.orderId = action.payload.orderId;
    //     console.log("got called");
    //     console.log(current(state));
    //   },
    // },

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
