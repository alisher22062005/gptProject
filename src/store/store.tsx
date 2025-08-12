import { configureStore } from "@reduxjs/toolkit";
import switchPriceReducer from "./Slices/switchPrice/switchPrice";

export const store = configureStore({
  reducer: {
    switchPrice: switchPriceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
