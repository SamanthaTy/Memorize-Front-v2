import { createReducer } from "@reduxjs/toolkit"
import { getAllTrainingCards, setCurrentDifficulty } from "../actions/trainingSession/getTrainingCards";
import { editTrainingCards } from "../actions/trainingSession/newTrainingCards";


interface TrainingCard extends Card {
  currentDifficulty: number;
  isHard: boolean | null;
}

export interface Card {
  id: number;
  front: string;
  back: string;
  difficulty: number;
  // currentDifficulty: number;
}

export interface TrainingSession {
  cards: Card[];
  loading: boolean;
  errorMessage: string | null;
  index: number,
  cardsToBeUpdated: Card[];
}

const initialState: TrainingSession = { 
    cards: [],
    loading: false,
    errorMessage: null,
    index: 0,
    cardsToBeUpdated: [],    
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

     const cardsAndCurrentDifficulty = filteredCards.map(card => ({...card, currentDifficulty: 0}));

      state.cards = cardsAndCurrentDifficulty

      // const card = state.cards[state.index];;
      
    })
    // .addCase(editTrainingCards.fulfilled, (state, action) => {
    //   state.cards = action.payload
    // })
    .addCase(getAllTrainingCards.rejected, (state) => {
      state.loading = false;
      state.errorMessage = "An error occurred while preparing the training deck"
    })

    // SET CURRENT DIFFICULTY
    .addCase(setCurrentDifficulty, (state, action) => {
      
      let upatedCurrentDifficulty = state.cards
      upatedCurrentDifficulty = 
     
    })
});

export default trainingSessionReducer;