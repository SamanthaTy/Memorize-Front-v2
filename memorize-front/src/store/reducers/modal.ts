import { createReducer } from '@reduxjs/toolkit';

import { toggleModal } from "../actions/modal";

interface ModalState {
    modalIsOpen: boolean;
}

export const initialState: ModalState = {
  modalIsOpen: false
};

const modalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleModal, (state) => {
      state.modalIsOpen = !state.modalIsOpen;
    })
})

export default modalReducer;