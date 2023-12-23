import { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../products/types";
import { CartState } from "./types";

const actions = {
  addToCart: (state: CartState, action: PayloadAction<Product>) => {
    const { id, price } = action.payload;
    const item = state.cart.find((item) => item.id === id);
    if (item) {
      item.quantity++;
      state.total += price;
    } else {
      state.cart.push({ ...action.payload, quantity: 1 });
      state.total += price;
    }
  },
  decreaseFromCart: (state: CartState, action: PayloadAction<number>) => {
    const item = state.cart.find((item) => item.id === action.payload);
    if (!item || !item.quantity) return;
    if (item && item.quantity > 1) {
      item.quantity--;
      state.total -= item.price;
    } else if (item && item.quantity === 1) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.total -= item.price;
    }
  },
  removeFromCart: (state: CartState, action: PayloadAction<number>) => {
    const item = state.cart.find((item) => item.id === action.payload);
    if (!item) return;
    state.total -= item.price * item.quantity;
    state.cart = state.cart.filter((item) => item.id !== action.payload);
  },
};
export default actions;
