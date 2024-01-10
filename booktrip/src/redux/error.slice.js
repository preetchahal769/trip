import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const authName = "error";
const initialState = createInitialState();
const reducers = createReducers();
const slice = createSlice({ name: authName, initialState, reducers });

export const errorActions = { ...slice.actions };
export const errorReducer = slice.reducer;

function createInitialState() {
  return {
    value: null,
  };
}

function createReducers() {
  return {
    setError,
    removeError,
  };

  function setError(state, action) {
    state.value = action.payload;
  }

  function removeError(state) {
    state.value = null;
  }
}
