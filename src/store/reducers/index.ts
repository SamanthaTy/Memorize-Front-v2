import modalReducer from "./modal";
import loginReducer from "./login";
import decksReducer from "./decks";
import cardsReducer from "./cards";

const reducer = {
  modal: modalReducer,
  login: loginReducer,
  decks: decksReducer,
  cards: cardsReducer,
};

export default reducer;
