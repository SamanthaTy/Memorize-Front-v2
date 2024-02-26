import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const GET_ALL_TRAINING_CARDS = "GET_ALL_TRAINING_CARDS";

export const getAllTrainingCards = createAsyncThunk<any, string>(GET_ALL_TRAINING_CARDS, async (deckId) => {
  const userId = localStorage.getItem("id");
 
  console.log("Hello im here");
  
  
  if (userId) {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/account/${userId}/decks/${deckId}/cards`,
      {
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      }
    );
    console.log(response.data);
    return response.data;
  } else {
    console.log("There was an error fecthing the data.")
  }
});

export const SET_CURRENT_DIFFICULTY = "SET_CURRENT_DIFFICULTY";

export const setCurrentDifficulty = createAction(SET_CURRENT_DIFFICULTY)


