import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { testApiSlice } from "./api/test/slice";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const store = configureStore({
  reducer: {
    [testApiSlice.reducerPath]: testApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testApiSlice.middleware),
});
