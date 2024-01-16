import { configureStore } from "@reduxjs/toolkit";
import pageShifter from "./pageShifter";
import balanceHandler from "./balanceHandler";
import slideHandler from "./slideHandler";
import sessionHandler from "./sessionHandler";
import {authReducer} from "./auth.slice";
import { errorReducer } from "./error.slice";


// export * from "./slice/pageShifter";
// export * from "./slice/balanceHandler";
// export * from "./slice/slideHandler";
// export * from "./slice/sessionHandler";
export * from "./auth.slice";
export * from "./error.slice";

export const store = configureStore({
  reducer: {
    auth : authReducer,
    // error : errorReducer,  remove it in future and its file will be deleted
    shifter: pageShifter,
    balance: balanceHandler,
    slide: slideHandler,
    session: sessionHandler,
  },
});
