import { configureStore } from "@reduxjs/toolkit";
import switchPriceReducer from "./Slices/switchPrice/switchPrice";
import inputOutputReducer from "./Slices/InputOutput/InputOutput";

export const store = configureStore({
  reducer: {
    switchPrice: switchPriceReducer,
    inputOutput: inputOutputReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
