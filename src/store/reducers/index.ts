import modalReducer from "./modal";
import loginReducer from "./login";
import decksReducer from "./decks";

const reducer = {
  modal: modalReducer,
  login: loginReducer,
  decks: decksReducer,
};

export default reducer;
