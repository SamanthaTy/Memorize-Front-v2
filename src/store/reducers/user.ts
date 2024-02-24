import { createReducer } from "@reduxjs/toolkit";
import { createUser } from "../actions/user/createUser.js";
import { getUser } from "../actions/user/getUser.js";

interface userState {
  username: string | null;
  email: string | null;
  password: string | null;
  loading: boolean;
  errorMessage: string | null;
}

const initialState: userState = {
  username: null,
  email: null,
  password: null,
  loading: false,
  errorMessage: null,
};

const createUserReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createUser.pending, (state) => {
      state.loading = true;
      state.errorMessage = null;
    })
    .addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.errorMessage = null;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    })
    .addCase(createUser.rejected, (state) => {
      state.loading = false;
      state.errorMessage = "user not found";
    })

    // GET USER

    .addCase(getUser.pending, (state) => {
      state.loading = true;
      state.errorMessage = null;
    })
    .addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.errorMessage = null;
      state.username = action.payload.username;
      state.email = action.payload.email;
    })
    .addCase(getUser.rejected, (state) => {
      state.loading = false;
      state.errorMessage = "User not found";
    });
});

export default createUserReducer;
