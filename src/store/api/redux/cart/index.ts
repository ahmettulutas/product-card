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
  reducers: { ...actions } /* {
    incrementItem: (state, action) => {
      const { id, name, price, image } = action.payload;
      const item = state.cart.find(item => item.id === id);

      if (item) {
        item.quantity++;
        state.total += price;
      }
      else {
        state.cart.push({ image, id, price, name, quantity: 1 });
        state.total += price;
      }
    },
    decrementItem: (state, action) => {
      const { id, name, price, image } = action.payload;
      const item = state.cart.find(item => item.id === id);

      if (item && item.quantity > 0) {
        item.quantity --;
        state.total -= price;
      }
    },
    removeItem: (state, action) => {
      const { id, price, quantity } = action.payload;
      state.cart = state.cart.filter(item => item.id !== id);
      state.total -= price * quantity;
    }
  } */
});
export default cartSlice.reducer;
export const { addToCart, decreaseFromCart } = cartSlice.actions;
/* export const cartSelector = state => state.cartSlice.cart;
export const totalSelector = state => state.cartSlice.total; */