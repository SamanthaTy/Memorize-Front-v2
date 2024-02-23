import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GET_ALL_DECKS = "GET_ALL_DECKS";

export const getAllDecks = createAsyncThunk(GET_ALL_DECKS, async () => {
  const userId = localStorage.getItem("id");
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  if (userId) {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/account/${userId}/decks`,
      {
        headers: {
          authorization: JSON.stringify(accessToken),
          "x-refresh-token": JSON.stringify(refreshToken),
        },
      }
    );
    if (response.headers["authorization"]) {
      const newAccessToken = response.headers["authorization"];
      localStorage.setItem("accessToken", newAccessToken);
    }
    if (response.headers["x-refresh-token"]) {
      const newRefreshToken = response.headers["refreshToken"];
      localStorage.setItem("refreshToken", newRefreshToken);
    }

    return response.data;
  } else {
    console.log("userId is null or undefined");
  }
});
