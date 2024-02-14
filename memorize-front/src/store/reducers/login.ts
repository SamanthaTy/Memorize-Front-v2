import { createReducer } from "@reduxjs/toolkit";
import { login, logout, tokenCheck } from "../actions/login";
import { isLoggedIn } from "../../helpers/isLoggedIn";
import { getToken } from "../../helpers/getToken";

interface LoginState {
  isLogged: boolean;
  username: string | null;
  errorMessage: string | null;
  // token: string | null;
}

export const initialState: LoginState = {
  isLogged: false,
  username: null,
  errorMessage: null,
  // token: getToken(),
};

const loginReducer = createReducer(initialState, (builder) => {
  builder
    // .addCase(login.pending, (state) => {
    //   state.errorMessage = null;
    // })
    .addCase(login.fulfilled, (state, action) => {
      console.log("Connexion réussie :", action.payload);
      console.log("isLogged :", action.payload.isLogged);
      state.isLogged = true;
      state.username = action.payload.username;

      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("username", action.payload.username);
    })
    .addCase(login.rejected, (state) => {
      state.errorMessage = "identifiant ou mot de passe incorrect";
    })
    .addCase(logout, (state) => {
      state.username = null;
      state.isLogged = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("username");
    })
    .addCase(tokenCheck, (state, action) => {
      const storedToken = localStorage.getItem("accessToken");
      const storedUserName = localStorage.getItem("username");

      if (storedToken && storedUserName) {
        state.isLogged = true;
        state.username = storedUserName;
      } else {
        state.isLogged = false;
        state.username = null;
      }
    });
});

export default loginReducer;
