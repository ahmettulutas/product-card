import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { productsReducer } from "./products";
import commonSlice from "./common";
import cartSlice from "./cart";
export const store = configureStore({
  reducer: {
    productsSlice: productsReducer,
    common: commonSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
