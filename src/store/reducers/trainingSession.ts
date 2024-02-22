import { createReducer } from "@reduxjs/toolkit"
import { getAllTrainingCards } from "../actions/trainingSession/getTrainingCards";



export interface Card {
  id: number;
  front: string;
  back: string;
  difficulty: number;
}

export interface TrainingSession {
  cards: Card[];
  loading: boolean;
  errorMessage: string | null;
}

const initialState: TrainingSession = { 
    cards: [],
    loading: false,
    errorMessage: null,
}

const trainingSessionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllTrainingCards.pending, (state) => {
      state.loading = true;
      state.errorMessage = null;
    })

    .addCase(getAllTrainingCards.fulfilled, (state, action) => {
      state.loading = false;

      let sortedCards = state.cards
      sortedCards = action.payload.sort((a: Card, b: Card) => { return a.difficulty - b.difficulty });

      const filteredCards = sortedCards.slice(0, 14);
      state.cards = filteredCards
    })

    .addCase(getAllTrainingCards.rejected, (state) => {
      state.loading = false;
      state.errorMessage = "An error occurred while preparing the training deck"
    })
})

export default trainingSessionReducer