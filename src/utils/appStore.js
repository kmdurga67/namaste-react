import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer, ///these are the slices of reducers, which gets store to the slice to redux store
  },
});

export default appStore;
