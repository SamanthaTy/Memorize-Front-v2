import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GET_ALL_DECKS = "GET_ALL_DECKS";

export const getAllDecks = createAsyncThunk(GET_ALL_DECKS, async(user_id) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/account/${user_id}/decks`)
  return response.data;
})

 