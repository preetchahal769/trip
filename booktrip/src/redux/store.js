import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth.slice";
import { balanceReducer } from "./balance.slice.js";

import pageShifter from "./pageShifter";
import sessionHandler from "./sessionHandler";

export * from "./auth.slice";
export * from "./balance.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer, // Reducer for managing authentication state
    balance: balanceReducer, // Reducer for managing balance state
    shifter: pageShifter, // Page shifter utility
    session: sessionHandler, // Session handler utility
  },
});
