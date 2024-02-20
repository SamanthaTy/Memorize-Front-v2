import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const EDIT_DECK = "EDIT_DECK";

export const editDeck = createAsyncThunk(EDIT_DECK, async ({deckId, updatedDeck}) => {
  const userId = localStorage.getItem("id");

  if (userId) {
    const response = await axios.patch(
      `${import.meta.env.VITE_API_URL}/account/${userId}/decks/${deckId}`,
      updatedDeck
    );

    console.log(response);
    console.log("Hello: ", response.data);

    return response.data;
  } else {
    console.log("userId est null ou undefined");
  }
});
