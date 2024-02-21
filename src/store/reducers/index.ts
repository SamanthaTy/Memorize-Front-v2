import modalReducer from "./modal";
import loginReducer from "./login";
import decksReducer from "./decks";
import cardsReducer from "./cards";
import createUserReducer from "./user";


const reducer = {
  modal: modalReducer,
  login: loginReducer,
  decks: decksReducer,
  cards: cardsReducer,
  user: createUserReducer,

};

export default reducer;
