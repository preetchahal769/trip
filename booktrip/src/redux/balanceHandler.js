import { createSlice } from '@reduxjs/toolkit'

// Initial state for the balanceHandler slice
const initialState = {
  value: "0",
}

// Create the balanceHandler slice
export const balanceHandler = createSlice({
  name: 'balanceHandler',
  initialState,
  reducers: {
    // Increment the value based on the payload
    increment: (state ,add) => {
      // Check if the payload or current value exceeds the limit
      if(add.payload >2000 || state.value >6000 || +state.value + +add.payload>6000){
        // Do nothing if the limit is exceeded
      } else {
        // Increment the value by the payload
        state.value = +state.value + +add.payload;
      }
    },
  },
})

// Extract the action creator for increment
export const { increment } = balanceHandler.actions

// Export the reducer for the balanceHandler slice
export default balanceHandler.reducer