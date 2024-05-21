import { createReducer, current } from "@reduxjs/toolkit"
import { setCurrentDifficulty, getAllTrainingCards, newCardArray } from "../actions/trainingSession/getTrainingCards";

export interface Card {
  id: number;
  front: string;
  back: string;
  difficulty: number;
  isCardMemorized: boolean;
  cardCounter: number;
}

export interface TrainingSession {
  cards: Card[];
  loading: boolean;
  errorMessage: string | null;
  index: number,
  cardsSetToHard: Card[];
}

const initialState: TrainingSession = { 
    cards: [],
    loading: false,
    errorMessage: null,
    index: 0,
    cardsSetToHard: [],    
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

      const cardsAndCurrentDifficulty = filteredCards.map(card => ({...card, isCardMemorized: false, cardCounter: 0}));

      const setNewDifficultyToNewCards = cardsAndCurrentDifficulty.map(card => card.difficulty === 0 ? ({...card, difficulty: 1}): card);

      state.cards = setNewDifficultyToNewCards;
    
    })
    .addCase(getAllTrainingCards.rejected, (state) => {
      state.loading = false;
      state.errorMessage = "An error occurred while preparing the training deck"
    })
    .addCase(setCurrentDifficulty, (state, action) => {
      console.log(action.payload);
      const index = state.cards.findIndex((el) => el.id === action.payload.id);

      if (action.payload.currentDifficulty === 1) {
        if (state.cards[index].difficulty === 32) return;
        state.cards[index] = { 
          ...state.cards[index], 
          difficulty: state.cards[index].difficulty * 2, 
          isCardMemorized: true
        }
      }

      if (action.payload.currentDifficulty === 2) {
        state.cards[index].difficulty === 1 
          ? state.cards[index] = {
            ...state.cards[index], isCardMemorized: true
          }
          : state.cards[index] = { 
            ...state.cards[index], 
            difficulty: state.cards[index].difficulty / 2, 
            isCardMemorized: true
          }
      }

      if (action.payload.currentDifficulty === 3) {
        state.cards[index] = { 
          ...state.cards[index], 
          difficulty: state.cards[index].difficulty = 1, 
          isCardMemorized: false,
          cardCounter: state.cards[index].cardCounter + 1
        }
      }
    })
})


export default trainingSessionReducer;