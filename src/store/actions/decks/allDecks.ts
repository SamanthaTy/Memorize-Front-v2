import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GET_ALL_DECKS = "GET_ALL_DECKS";

export const getAllDecks = createAsyncThunk(GET_ALL_DECKS, async(id) => {
  console.log("je suis id : ", id)
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/account/${id}/decks`)
  console.log("Hello: " ,response.data)
  return response.data;
})

   