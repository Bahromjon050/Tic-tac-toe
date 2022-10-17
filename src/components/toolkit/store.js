import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./Reducers";

export const store = configureStore({
    reducer:{
        app: appSlice
    }
})