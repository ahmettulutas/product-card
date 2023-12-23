import { createRequestThunk } from "../redux-builders";
import endpoints from "../../axiosservice/endpoints";
import { ResponseGenerator } from "../../types";
import { Product } from "./types";
import { createAction } from "@reduxjs/toolkit";

const productsThunks = {
  products: {
    get: createRequestThunk<undefined, ResponseGenerator<"products", Product>>(
      "get",
      "products",
      endpoints.products
    ),
    set: createAction<ResponseGenerator<"products", Product>>("products/set"),
  },
};

export { productsThunks };
