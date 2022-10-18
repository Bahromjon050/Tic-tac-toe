import { configureStore } from "@reduxjs/toolkit";
import app from "./Reducers";

export const store = configureStore({
  reducer: {
    app
  },
});
