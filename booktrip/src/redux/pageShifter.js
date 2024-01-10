import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Filter",
};

export const pageShifter = createSlice({
  name: "shifter",
  initialState,
  reducers: {
    profile: (state) => {
      state.value = "Profile";
    },
    balance: (state) => {
      state.value = "Balance";
    },
    filter: (state) => {
      state.value = "Filter";
    },
    tours: (state) => {
      state.value = "Tours";
    },
    about: (state) => {
      state.value = "About";
    },
    menu: (state) => {
      if (state.value == "Menu") {
        state.value = "Tours";
      } else {
        state.value = "Menu";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { profile, balance, filter, tours, menu ,about} = pageShifter.actions;

export default pageShifter.reducer;
