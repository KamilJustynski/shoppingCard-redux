import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "./uiSlice";
import { cardReducer } from "./cardSlice";

export const store = configureStore({
  reducer: { ui: uiReducer, cart: cardReducer },
});
