import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CreateCardProps } from "../../reducers/cards";

export const CREATE_CARD = "CREATE_CARD";

export const createCard = createAsyncThunk<any, CreateCardProps>(
  CREATE_CARD,
  async ({ newCard, deckId }) => {
    const userId = localStorage.getItem("id");

    if (userId) {
      const response = await axios.post(
        `${
          import.meta.env.VITE_API_URL
        }/account/${userId}/decks/${deckId}/cards`,
        newCard,
        {
          headers: {
            authorization: localStorage.getItem("accessToken"),
          },
        }
      );

      return response.data;
    } else {
      console.log("userId est null ou undefined");
    }
  }
);
