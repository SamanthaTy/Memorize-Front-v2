import { createReducer } from '@reduxjs/toolkit';

import { toggleModal } from "../actions/modal";

interface ModalState {
    modalIsOpen: boolean;
}

export const initialState: ModalState = {
  modalIsOpen: false
};

// This reducer allows us to handle the modalIsOpen state so we can reuse it throughout the app, since we are using modals multiple times
const modalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleModal, (state) => {
      state.modalIsOpen = !state.modalIsOpen;
    })
})

export default modalReducer;