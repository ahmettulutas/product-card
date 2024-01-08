// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import endpoints from "./endpoints";
import { ResponseGenerator } from "../types";
import { Product } from "./types";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: endpoints.base }),
  endpoints: (builder) => ({
    getProducts: builder.query<ResponseGenerator<"products", Product>, void>({
      query: () => "/products",
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
});
export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
