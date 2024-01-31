import { configureStore } from "@reduxjs/toolkit";
import {authReducer} from "./auth.slice";
import { balanceReducer } from "./balance.slice.js"; // Correct path

import pageShifter from "./pageShifter";
import slideHandler from "./slideHandler";
import sessionHandler from "./sessionHandler";

// Export individual reducers
export * from "./auth.slice";
export * from "./balance.slice";


// Create the Redux store with the specified reducers
export const store = configureStore({
  reducer: {
    auth : authReducer,  // Reducer for managing authentication state
    balance : balanceReducer ,  // Reducer for managing balance state
  
    shifter: pageShifter,  // Page shifter utility
    slide: slideHandler,  // Slide handler utility
    session: sessionHandler,  // Session handler utility
  },
});