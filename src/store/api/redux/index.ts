import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import commonSlice from "./common";
import cartSlice from "./cart";
import { productsApi } from "../api-service";

export const store = configureStore({
  reducer: {
    common: commonSlice,
    cart: cartSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      productsApi.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
