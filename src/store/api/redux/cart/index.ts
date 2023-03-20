import { createSlice } from "@reduxjs/toolkit";
import actions from "./actions";
import { CartState } from "./types";

const initialState:CartState = {
  cart: [],
  total: 0
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: { ...actions }
});

export default cartSlice.reducer;
export const { addToCart, decreaseFromCart, removeFromCart } = cartSlice.actions;
