import { createReducer } from "@reduxjs/toolkit";
import { getAllCards } from "../actions/cards/allcards";
import { editCard } from "../actions/cards/editCard";

export interface CardInterface {
  id: number;
  front: string;
  back: string;
  difficulty: number;
  deck_id: number;
}

// interface CardsById {
//   [deckId: number]: Card[];
// }

export interface CardsState {
  cards: CardInterface[];
  isFetching: boolean;
  isCreating: boolean;
  isEditing: boolean;
  isDeleting: boolean;
  loading: boolean;
  errorMessage: string | null;
}

const initialState: CardsState = {
  // cards: {
  //   123: [],
  // },
  cards: [],
  isFetching: false,
  isCreating: false,
  isEditing: false,
  isDeleting: false,
  loading: false,
  errorMessage: null,
};

const cardsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllCards.pending, (state) => {
      state.loading = true;
      state.errorMessage = null;
    })
    .addCase(getAllCards.fulfilled, (state, action) => {
      state.isFetching = true;
      state.isCreating = false;
      state.isEditing = false;
      state.isDeleting = false;

      state.loading = false;
      // const cards = {};
      // if the cards object doesnt have a deck id from the current card, then create an empty array and add it to the array.
      // action.payload.forEach(card => {
      //   if (!cards[card.deck_id]) {
      //     cards[card.deck_id] = [];
      //   }
      //   cards[card.deck_id].push(card);
      // });
      // state.cards = cards;

      state.cards = action.payload;
    })
    .addCase(getAllCards.rejected, (state) => {
      state.loading = false;
      state.errorMessage = "No associated card found";
    })

    // EDIT CARD
    .addCase(editCard.pending, (state) => {
      state.loading = true;
      state.errorMessage = null;
    })
    .addCase(editCard.fulfilled, (state, action) => {
      state.loading = false;

      state.cards = state.cards.map((card) =>
        card.id === action.payload.id ? action.payload : card
      );

      state.isFetching = false;
      state.isCreating = false;
      state.isEditing = true;
      state.isDeleting = false;

      state.errorMessage = null;
    })
    .addCase(editCard.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage =
        action.error.message || "An error occurred while editing the card";
    });
});

export default cardsReducer;
