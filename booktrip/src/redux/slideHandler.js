import { createSlice } from "@reduxjs/toolkit";

const slides = [
  "http://localhost:5173/assets/image_1.png",
  "http://localhost:5173/assets/image_2.png",
  "http://localhost:5173/assets/image_3.png",
  "http://localhost:5173/assets/image_4.png",
  "http://localhost:5173/assets/image_5.png",
];
let i = 0;
const initialState = {
  value: slides[i],
};

export const slideHandler = createSlice({
  name: "slideHandler",
  initialState,
  reducers: {
    increment: (state) => {
      if (i == slides.length-1) {
        i = 0;
        state.value = slides[i]
      } else {
        i++;
        state.value = slides[i]
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = slideHandler.actions;

export default slideHandler.reducer;
