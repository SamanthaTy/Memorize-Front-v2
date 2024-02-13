import { createReducer } from '@reduxjs/toolkit';
import { login, logout, tokenCheck } from '../actions/login';
import { isLoggedIn } from '../../helpers/isLoggedIn';

interface LoginState {
    isLogged: boolean;
    username: string | undefined | null;
    errorMessage: string | null;
}

export const initialState: LoginState = {
  isLogged: false,
  username: undefined,
  errorMessage: null,
}

const loginReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.pending, (state) => { 
    })
    .addCase(login.fulfilled, (state, action) => {
      console.log("Connexion réussie :", action.payload);
      console.log("isLogged :", action.payload.isLogged)
      state.isLogged = action.payload.isLogged;
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
    })
    .addCase(tokenCheck, (state, action) => {
      state.isLogged = true
      state.username = localStorage.getItem("username")
    })
})

export default loginReducer;