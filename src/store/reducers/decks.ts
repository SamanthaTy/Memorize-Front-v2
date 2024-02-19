import { createReducer } from "@reduxjs/toolkit";
import { getAllDecks } from "../actions/decks/allDecks";
import { createDeck } from "../actions/decks/createDeck";

export interface Deck {
  id: number | null;
  name: string | undefined;
  description: string | null;
  user_id: number;
}

interface AllDecksState {
  decks: Deck[];
  isFetching: boolean;
  isCreating: boolean;
  loading: boolean;
  errorMessage: string | null;
}

export const initialState: AllDecksState = {
  decks: [],
  isFetching: false,
  isCreating: false,
  loading: false,
  errorMessage: null,
};

const decksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllDecks.pending, (state) => {
      state.loading = true;
      state.errorMessage = null;
    })
    .addCase(getAllDecks.fulfilled, (state, action) => {
      console.log("Redux State:", state);
      console.log("Action Payload:", action.payload);

      state.isFetching = true;
      state.isCreating = false;

      state.loading = false;
      state.decks = action.payload;
    })
    .addCase(getAllDecks.rejected, (state) => {
      state.loading = false;
      state.errorMessage = "Pas de deck associé à ce compte";
    })
    // CREATE NEW DECK
    .addCase(createDeck.pending, (state) => {
      state.loading = true;
      state.errorMessage = null;
    })
    .addCase(createDeck.fulfilled, (state, action) => {
      state.loading = false;

      state.decks.push(action.payload);

      state.isFetching = false;
      state.isCreating = true;

      state.errorMessage = null;
    })
    .addCase(createDeck.rejected, (state) => {
      state.loading = false;
      state.errorMessage = "Veuillez donner un nom à votre deck.";
    });
});

export default decksReducer;
