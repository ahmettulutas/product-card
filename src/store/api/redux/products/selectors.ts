import { RootState } from "..";
import { selectSearchQuery } from "../common/selectors";
import { Product } from "./types";

export const selectAllProducts = (state: RootState) =>
  state.productsSlice.products.data;

export const selectFilteredProducts = (state: RootState) => {
  const searchTerm = selectSearchQuery(state);
  const allProducts = selectAllProducts(state);
  return allProducts?.products.filter((item: Product) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
