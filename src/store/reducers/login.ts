import { createReducer } from "@reduxjs/toolkit";
import { login, logout, tokenCheck } from "../actions/login";
import { deleteUser } from "../actions/user/deleteUser";

interface LoginState {
  isLogged: boolean;
  username: string | null;
  errorMessage: string | null;
  email: string | null;
  id: number | null;
}

export const initialState: LoginState = {
  isLogged: false,
  username: null,
  email: null,
  id: null,
  errorMessage: null,
};

// When the login is fulfilled, we change the state of isLogged and assigne a new value to username and we also fetch the token from the API. This will allow the user to log into their account.
// The tokenCheck is used in the App component to keep the isLogged state to true once the check has been successful and the use will still be logged from one page to another.
const loginReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.fulfilled, (state, action) => {
      console.log("Connexion réussie :", action.payload);
      state.isLogged = true;
      console.log("isLogged :", action.payload.isLogged);
      localStorage.setItem("accessToken", action.payload.accessToken);
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.id = action.payload.id;
    })
    .addCase(login.rejected, (state) => {
      state.errorMessage = "identifiant ou mot de passe incorrect";
    })
    .addCase(logout, (state) => {
      state.isLogged = false;
      localStorage.removeItem("accessToken");
    })
    .addCase(tokenCheck, (state) => {
      const storedToken = localStorage.getItem("accessToken");
      const storedUserName = state.username;

      if (storedToken && storedUserName) {
        state.isLogged = true;
      } else {
        state.isLogged = false;
      }
    })
    .addCase(deleteUser.fulfilled, () => {
      return initialState;
    });
});

export default loginReducer;
