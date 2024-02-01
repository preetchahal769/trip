import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { API } from "_api";
const balanceName = "balance";
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const slice = createSlice({ name: balanceName, initialState, reducers });
const toastOptions = {
  className: "custom-toast",
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const balanceActions = { ...slice.actions, ...extraActions };
export const balanceSlice = slice;
export const balanceReducer = slice.reducer;

function createInitialState() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  if (JSON.parse(localStorage.getItem("auth"))) {
    return {
      value: auth.balance ,
    };
  } else {
    return {
      value: 0,
    };
  }
}
function createReducers() {
  return {
    // Reducer to set the auth state
    updateBalance,
  };

  function updateBalance(state, action) {
    console.log("action.payload", action.payload); // Use action.payload
    state.value = action.payload;
  }
}

function createExtraActions() {
  return {
    // Action to update balance with amount
    add: createAddAction(),
  };
}
function createAddAction() {
  return createAsyncThunk(
    `${balanceName}/add`,
    async (amount, { dispatch }) => {
      try {
        let auth = JSON.parse(localStorage.getItem("auth"));
        let email = auth.email;
        const balance = await axios.post(`${API}/balance/addBalance`, {
          email,
          amount,
        });
        console.log("balance", balance.data.updatedBalance);
        toast.success("Balance updated successfully", toastOptions);
        dispatch(balanceActions.updateBalance(balance.data.updatedBalance));
        auth.balance = balance.data.updatedBalance;
        localStorage.setItem("auth", JSON.stringify(auth));
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message, toastOptions);
      }
    }
  );
}
