import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GET_USER = "GET_USER";

export const getUser = createAsyncThunk(GET_USER, async () => {
  const userId = localStorage.getItem("id");
  const accessToken = localStorage.getItem("accessToken");
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/account/${userId}`,
    {
      headers: {
        authorization: accessToken,
      },
    }
  );
  return response.data;
});
