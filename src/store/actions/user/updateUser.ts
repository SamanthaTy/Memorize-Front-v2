import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const UPDATE_USER = "UPDATE_USER";

export const updateUser = createAsyncThunk(
  UPDATE_USER,
  async ({ userId, userData }) => {
    const response = await axios.patch(
      `${import.meta.env.VITE_API_URL}/account/${userId}`,
      userData,
      {
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      }
    );
    return response.data;
  }
);
