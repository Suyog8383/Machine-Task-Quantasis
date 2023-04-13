import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./components/Register.slice";

export const store = configureStore({
  reducer: {
    reducer: registerReducer,
  },
});
