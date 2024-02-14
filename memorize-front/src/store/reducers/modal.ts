import { createReducer } from '@reduxjs/toolkit';

import { toggleModal } from "../actions/modal";

export interface ModalState {
    modalIsOpen: boolean;
    modalType: string | null
}

export const initialState: ModalState = {
  modalIsOpen: false,
  modalType: null
};

const modalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleModal, (state, action) => {
      state.modalIsOpen = !state.modalIsOpen;
      state.modalType = action.payload?.modalType
    })
})

export default modalReducer;