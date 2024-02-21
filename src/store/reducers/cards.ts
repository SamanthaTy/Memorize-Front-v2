import { createReducer } from "@reduxjs/toolkit";
import { getAllCards } from "../actions/cards/allcards";

export interface Card {
  front: string;
  back: string;
  difficulty: number;
  deck_id: number;
}

interface CardsById {
  [deckId: number]: Card[];
}

export interface CardsState {
  cards: CardsById;
  isFetching: boolean;
  isCreating: boolean;
  isEditing: boolean;
  isDeleting: boolean;
  loading: boolean;
  errorMessage: string | null;
}

const initialState: CardsState = {
  cards: {
    123: [],
  },
  isFetching: false,
  isCreating: false,
  isEditing: false,
  isDeleting: false,
  loading: false,
  errorMessage: null,
};

const cardsReducer = createReducer(initialState, builder => {
  builder
    .addCase(getAllCards.pending, state => {
      state.loading = true;
      state.errorMessage = null;
    })
    .addCase(getAllCards.fulfilled, (state, action) => {
      state.isFetching = true;
      state.isCreating = false;
      state.isEditing = false;
      state.isDeleting = false;

      state.loading = false;
      const cards = {};
      action.payload.forEach(card => {
        if (!cards[card.id]) {
          cards[card.id] = [];
        }
        cards[card.id].push(card);
      });
      state.cards = cards;
    })
    .addCase(getAllCards.rejected, state => {
      state.loading = false;
      state.errorMessage = "No associated card found";
    });
});

export default cardsReducer;
