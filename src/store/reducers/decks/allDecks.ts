import { createReducer } from "@reduxjs/toolkit";
import { getAllDecks } from "../../actions/decks/allDecks";

interface Deck {
  id: number
  name: string
  description: string
  user_id: number
}

interface AllDecksState {
  decks: Deck[],
  loading: boolean,
  errorMessage: string | null
}

export const initialState: AllDecksState = {
  decks: [],
  loading: false,
  errorMessage: null
};


const allDecksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllDecks.pending, (state, action) => {
      state.loading = true;
      state.errorMessage = null;
    })
    .addCase(getAllDecks.fulfilled, (state, action) => {
      state.loading = false;
      state.decks = action.payload.decks;
    })
    .addCase(getAllDecks.rejected, (state) => {
      state.loading = false;
      state.errorMessage = "Pas de deck associé à ce compte"
    })
});

export default allDecksReducer;


