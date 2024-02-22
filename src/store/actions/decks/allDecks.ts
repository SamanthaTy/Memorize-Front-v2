import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GET_ALL_DECKS = "GET_ALL_DECKS";

export const getAllDecks = createAsyncThunk(GET_ALL_DECKS, async () => {
  const userId = localStorage.getItem("id");
  console.log(previousRefreshToken);

  if (userId) {
    let response;
    try {
      response = await axios.get(
        `${import.meta.env.VITE_API_URL}/account/${userId}/decks`,
        {
          headers: {
            authorization: localStorage.getItem("accessToken"),
          },
        }
      );
    } catch (error) {
      const { accessToken, refreshToken } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/refresh-tokens`,
        { refreshToken: localStorage.getItem("refreshToken") }
      );
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      response = await axios.get(
        `${import.meta.env.VITE_API_URL}/account/${userId}/decks`,
        {
          headers: {
            authorization: localStorage.getItem("accessToken"),
          },
        }
      );
    } finally {
      return response.data;
    }
  } else {
    console.log("userId is null or undefined");
  }
});
