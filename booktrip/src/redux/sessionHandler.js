import { createSlice } from "@reduxjs/toolkit";

const getCookie = (name) => {
  const cookies = document.cookie.split("; ");

  for (let i = 0; i < cookies.length; i++) {
    const [cookieName, cookieValue] = cookies[i].split("=");

    if (cookieName.trim() === name) {
      return decodeURIComponent(cookieValue);
    }
  }

  return null;
};
// Initial state for the sessionHandler slice
const initialState = {
  value: getCookie("access_token") ? "Logged in" : "Logged out",
};
// Create the sessionHandler slice
export const sessionHandler = createSlice({
  name: "sessionHandler",
  initialState,
  reducers: {
    logIn: (state, action) => {
      console.log("payload", action.payload);
      const { user, userData } = action.payload;
      console.log("userDatainSlice", userData);
      localStorage.setItem(user, JSON.stringify(userData));
      state.value = "Logged in";
      console.log("value", state.value);
    },

    logOut: (state, user) => {
      // Remove the user from localStorage
      localStorage.removeItem(user);
      state.value = "Logged out";
    },

    sessionOut: (state) => {
      // Check if the session has expired
      const cookieValue = getCookie("access_token");

      if (cookieValue === null) {
        // Remove the user from localStorage
        localStorage.removeItem("user");
        state.value = "Session Expired";
      } else {
        state.value = "Logged in";
      }
    },
  },
});

// Extract the action creator for increment
export const { logIn, logOut, sessionOut } = sessionHandler.actions;

// Export the reducer for the sessionHandler slice
export default sessionHandler.reducer;
