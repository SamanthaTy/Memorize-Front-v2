import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Deck } from "../../reducers/decks";

export const CREATE_DECK = "CREATE_DECK";

//Here, we define the type of the return of our Thunk, and we precise that we're only using the partial typing of Deck (from decks reducer)
export const createDeck = createAsyncThunk<any, Partial<Deck>>(
  CREATE_DECK,
  async (newDeck) => {
    const userId = localStorage.getItem("id");

    if (userId) {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/account/${userId}/decks`,
        newDeck
      );

      return response.data;
    } else {
      console.log("userId est null ou undefined");
    }
  }
);
