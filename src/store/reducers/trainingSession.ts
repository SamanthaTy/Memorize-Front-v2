import { createReducer } from "@reduxjs/toolkit"
import { getAllTrainingCards } from "../actions/trainingSession/getTrainingCards";



export interface Card {
  id: number;
  front: string;
  back: string;
  difficulty: number;
  currentDifficulty: number;
}

export interface TrainingSession {
  cards: Card[];
  loading: boolean;
  errorMessage: string | null;
  index: number,
}

const initialState: TrainingSession = { 
    cards: [],
    loading: false,
    errorMessage: null,
    index: 0,
}

const trainingSessionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllTrainingCards.pending, (state) => {
      state.loading = true;
      state.errorMessage = null;
    })

    .addCase(getAllTrainingCards.fulfilled, (state, action) => {
      console.log("I'm the action payload :", action.payload)
      state.loading = false;

      let sortedCards = state.cards
      sortedCards = action.payload.sort((a: Card, b: Card) => { return a.difficulty - b.difficulty });

      const filteredCards = sortedCards.slice(0, 14);
      state.cards = filteredCards

      const card = state.cards[state.index];;
      
      console.log("I'm the filteredCards :", filteredCards)
    })

    .addCase(getAllTrainingCards.rejected, (state) => {
      state.loading = false;
      state.errorMessage = "An error occurred while preparing the training deck"
    })
})

export default trainingSessionReducer