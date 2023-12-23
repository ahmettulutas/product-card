import { Product } from "../products/types";
export type CartProduct = Product & {
  quantity: number;
};
export type CartState = {
  cart: CartProduct[];
  total: number;
};
