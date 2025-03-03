import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./slices/contactSlice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
