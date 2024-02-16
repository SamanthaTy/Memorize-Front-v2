import modalReducer from './modal';
import loginReducer from './login';
import allDecksReducer from './decks/allDecks';

const reducer = {
  modal: modalReducer,
  login: loginReducer,
  allDecks: allDecksReducer,
};

export default reducer;
