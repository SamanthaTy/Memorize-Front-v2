import modalReducer from "./modal";
import loginReducer from "./login";
import decksReducer from "./decks";
import createUserReducer from "./user";

const reducer = {
  modal: modalReducer,
  login: loginReducer,
  decks: decksReducer,
  user: createUserReducer,
};

export default reducer;
