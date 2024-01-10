import { createAsyncThunk,  createSlice } from "@reduxjs/toolkit";


import { history ,toast ,axios} from '_helper'

const authName = "auth";
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();

const slice = createSlice({ name: authName, initialState, reducers });

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

export const authActions = { ...slice.actions, ...extraActions };
export const authReducer = slice.reducer;

function createInitialState() {
  return {
    value: JSON.parse(localStorage.getItem("auth"))|| null,
  };
}

function createReducers() {
  return {
    // Reducer to set the auth state
    setAuth,
  };

  function setAuth(state, action) {
    state.value = action.payload;
    console.log(`state.value ${state.value}`);
  }
}

function createExtraActions() {
  return {
    // Action to perform login
    login: createLoginAction(),

    // Action to perform logout
    logout: createLogoutAction(),
  };
}

function createLoginAction() {
  return createAsyncThunk(`${authName}/login`, async (user , { dispatch }) => {
    console.log(`auth before login `)
    try {
      await axios.post(`/server/auth/signin`, user);
// console.log(`auth before login ${state.value}`)
      const res = await axios.get(`/server/auth/verify`);

     

    //   console.log(`auth after login ${state.value}`)
      dispatch(authActions.setAuth(JSON.stringify(res.data)));
      localStorage.setItem('auth', JSON.stringify(res.data));
      history.navigate("/");
      // Show success toast notification
      toast.success("Login successful", toastOptions);
    } catch (error) {
      if (!error.response.data.message) {
        // Show error toast notification with error message
        console.log(error);
        toast.error(error.message, toastOptions);
      } else {
        console.log(error);
      
        // Show error toast notification with response error message
        toast.error(error.response.data.message, toastOptions);
      }
    }
  });
}

function createLogoutAction() {
  return createAsyncThunk(`${authName}/logout`, async (user) => {
    return user;
  });
}