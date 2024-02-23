import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GET_USER = "GET_USER";

export const getUser = createAsyncThunk(GET_USER, async (userId) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/account/${userId}`,
    {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    }
  );
  return response.data;
});
