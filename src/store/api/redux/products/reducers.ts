import { store } from "..";
import { productsThunks } from "./actions";

export const getProducts = () =>
  store.dispatch(
    productsThunks.products.get(/* { path: "/category/smartphones" } */),
  );
export const getComments = () =>
  store.dispatch(
    productsThunks.comments.get(/* { path: "/category/smartphones" } */),
  );
