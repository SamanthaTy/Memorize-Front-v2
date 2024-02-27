import { createReducer, current } from "@reduxjs/toolkit"
import { setCurrentDifficulty, getAllTrainingCards, newCardArray } from "../actions/trainingSession/getTrainingCards";

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
    .addCase(setCurrentDifficulty, (state, action) => {
      const index = state.cards.findIndex((el) => el.id === action.payload.id);

      state.cards[index] = {...state.cards[index], currentDifficulty: action.payload.currentDifficulty};
    })
    .addCase(newCardArray, (state, action) => {
        console.log(action.payload);
        const cardId = action.payload;
        console.log(cardId);
        const index = state.cards.findIndex((el) => el.id === cardId);
        console.log(current(state.cards[index]));
        console.log(index);
        if(state.cards[index].currentDifficulty !== 3) {
        const transferredCard = state.cards.splice(index, 1, {});
        state.cardsToBeUpdated.push(transferredCard);
        console.log(current(state.cards));
        console.log(current(state.cardsToBeUpdated));
        }
    })
})




export default trainingSessionReducer;