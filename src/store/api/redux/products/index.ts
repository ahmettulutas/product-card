import { createReducer, SerializedError } from "@reduxjs/toolkit";
import { createInitialApiState } from "../redux-builders";
import { productsThunks } from "./actions";
import { Error } from "../../types";

type ProductsApiActions = typeof productsThunks;
type ProductsState = {
  [endpoint in keyof ProductsApiActions]: {
    data?: ReturnType<
      ProductsApiActions[endpoint]["get"]["fulfilled"]
    >["payload"];
    loading?: boolean;
    error?: SerializedError | Error;
  };
};

const endpoints = Object.keys(productsThunks) as Array<
  keyof ProductsApiActions
>;
const initialState = createInitialApiState<ProductsState>(endpoints);
const productsReducer = createReducer(initialState, (builder) => {
  endpoints.forEach((endpoint) => {
    const thunk = productsThunks[endpoint];
    builder.addCase(thunk.get.pending, (state) => {
      state[endpoint].loading = true;
      state[endpoint].error = undefined;
    });
    builder.addCase(thunk.get.fulfilled, (state, action) => {
      state[endpoint].loading = false;
      state[endpoint].data = action.payload;
    });
    builder.addCase(thunk.get.rejected, (state, action) => {
      state[endpoint].loading = false;
      if (action.meta.rejectedWithValue)
        state[endpoint].error = action.payload as Error;
      else state[endpoint].error = action.error as SerializedError;
    });
    if ("set" in thunk)
      builder.addCase(thunk.set, (state, action) => {
        state[endpoint].data = action.payload;
      });
  });
});

export { productsReducer };
