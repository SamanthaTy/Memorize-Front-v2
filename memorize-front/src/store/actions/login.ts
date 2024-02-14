import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const TOKEN_CHECK = "TOKEN_CHECK";

export const logout = createAction(LOGOUT);
export const tokenCheck = createAction(TOKEN_CHECK)

// the thunk allows us to create an action to get data from the API
export const login = createAsyncThunk(LOGIN, async(formData) => {
  const response = await axios.post("http://127.0.0.1:3000/api/auth/", formData, {
    headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
  })
  console.log("Response from login action:", response.data);
  return response.data;
  
})