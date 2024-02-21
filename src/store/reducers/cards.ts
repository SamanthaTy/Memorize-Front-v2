const initialState = {
  cards: [],
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
      state.decks = action.payload;
    })
    .addCase(getAllCards.rejected, state => {
      state.loading = false;
      state.errorMessage = "No associated deck found";
    });
});

export default cardsReducer;
