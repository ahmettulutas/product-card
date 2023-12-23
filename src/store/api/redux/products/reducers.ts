import { store } from "..";
import { productsThunks } from "./actions";

export const getProducts = () =>
  store.dispatch(
    productsThunks.products.get(/* { path: "/category/smartphones" } */)
  );
