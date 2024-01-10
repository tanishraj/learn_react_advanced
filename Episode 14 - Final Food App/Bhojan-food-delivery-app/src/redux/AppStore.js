import { configureStore, combineSlices } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

export const AppStore = configureStore({ reducer: { cart: cartReducer } });
