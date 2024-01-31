import { configureStore, combineSlices } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import locationReducer from "./slices/locationSlice";

export const AppStore = configureStore({
  reducer: { cart: cartReducer, location: locationReducer },
});
