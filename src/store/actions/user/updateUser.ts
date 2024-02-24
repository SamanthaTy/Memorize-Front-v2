import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const UPDATE_USER = "UPDATE_USER";

export const UPDATE_PASSWORD = "UPDATE_PASSWORD";

export const updateUser = createAsyncThunk(
  UPDATE_USER,
  async ({ email, username }) => {
    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("id");
    const response = await axios.patch(
      `${import.meta.env.VITE_API_URL}/account/${userId}`,
      { email, username },
      {
        headers: {
          authorization: accessToken,
        },
      }
    );
    return response.data;
  }
);

export const updatePassword = createAsyncThunk(
  UPDATE_PASSWORD,
  async ({ password, newPassword }) => {
    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("id");
    const response = await axios.patch(
      `${import.meta.env.VITE_API_URL}/account/${userId}/change-password`,
      { password, newPassword },
      {
        headers: {
          authorization: accessToken,
        },
      }
    );
    return response.data;
  }
);
