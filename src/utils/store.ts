import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./storage/reducer";

export const store = configureStore({ reducer: appReducer });
