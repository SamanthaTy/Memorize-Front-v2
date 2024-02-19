import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GET_ALL_DECKS = "GET_ALL_DECKS";

export const getAllDecks = createAsyncThunk(GET_ALL_DECKS, async () => {
  const userId = localStorage.getItem("id");

  console.log("je suis id : ", userId);

  if (userId) {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/account/${userId}/decks`
    );

    console.log("Hello: ", response.data);
    return response.data;
  } else {
    console.log("userId est null ou undefined");
  }
});


