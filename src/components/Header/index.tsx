import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/memorize logo.png";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logout } from "../../store/actions/login";

const Header = () => {
  // Use the state stored in our reducer so the button "Déconnection" and the welcome text only appear when the user is logged in.
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.login.isLogged);
  console.log(`Am I currently logged in ? ${isLogged ? "Yes" : "No"}`);

  const navigate = useNavigate();

  const handleDisconnectClick = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="bg-F5E9E0 text-1F3D75 h-21 flex flex-col items-center justify-between w-full xl:flex-row ">
      <div className="flex items-center flex-col xl:flex-row xl:flex-start">
        <Link to="/" className="flex flex-col">
          <img src={logo} alt="Logo Mem'O'rize" className="flex flex-col w-32 sm:w-28 xl:w-20 xl:flex-row xl:flex-start" />
        </Link>
        <div className="flex items-center">
          <Link to="/" 
            className="flex text-xl font-semibold">
            MEM'O'RIZE
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap justify-center space-x-3 mt-2 mb-2 xl:items-center xl:mr-4 ">
        <Link
          className="rounded-full transition-colors duration-300 ease-in-out hover:bg-1F3D75 hover:text-F5E9E0"
          to="/"
        >
          Accueil
        </Link>

        {isLogged && (
          <>
            <Link
              className=" rounded-full transition-colors duration-300 ease-in-out hover:bg-1F3D75 hover:text-F5E9E0"
              to="/profile"
            >
              Mon compte
            </Link>

            <Link
              className=" rounded-full transition-colors duration-300 ease-in-out hover:bg-1F3D75 hover:text-F5E9E0"
              to="/decks"
            >
              Mes decks
            </Link>
            <button
              className=" rounded-full transition-colors duration-300 ease-in-out hover:bg-1F3D75 hover:text-F5E9E0"
              onClick={handleDisconnectClick}
            >
              Déconnexion
            </button>
          </>
        )}

      </div>

    </header>
  );
};

export default Header;



import { createContext, useContext, useEffect, useReducer } from "react";
const QuizContext = createContext();
const SECS_PER_QUESTION = 30;
const initialState = {
questions: [],
status: "loading",
index: 0,
answer: null,
points: 0,
highscore: 0,
secondsRemaining: null
}

function reducer(state, action) {
switch (action.type) {
case "dataReceived":
return {
...state,
questions: action.payload,
status: "ready"
}

case "dataFailed":
return {
...state,
status: "error"
}

case "start":
return {
...state,
status: "active",
secondsRemaining: state.questions.length * SECS_PER_QUESTION
}

case "newAnswer":
const question = state.questions.at(state.index);

return {
...state,
answer: action.payload,
points: action.payload === question.correctOption
? state.points + question.points
: state.points
}

case "nextQuestion":
return {
...state,
index: state.index + 1,
answer: null
}

case "finish":
return {
...state,
status: "finished",
highscore: state.points > state.highscore
? state.points
: state.highscore
}

case "restart":
return {
...initialState,
questions: state.questions,
status: "ready"
}

case "tick":
return {
...state,
secondsRemaining: state.secondsRemaining - 1,
status: state.secondsRemaining === 0
? "finished"
: state.status
}

default:
throw new Error("Unknown action")
}
}

function QuizProvider({ children }) {
const [{
questions,
status,
index,
answer,
points,
highscore,
secondsRemaining
}, dispatch] = useReducer(reducer, initialState);

const numQuestions = questions.length;
const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

useEffect(function () {
fetch("http://localhost:9000/questions")
.then((res) => res.json())
.then((data) => dispatch({ type: "dataReceived", payload: data }))
.catch((err) => dispatch({ type: "dataFailed" }));
}, []);

return <QuizContext.Provider value={{
questions,
status,
index,
answer,
points,
highscore,
secondsRemaining,
numQuestions,
maxPoints,
dispatch
}}>
{children}
</QuizContext.Provider>
}

function useQuiz() {
const context = useContext(QuizContext);
if (context === undefined) throw new Error("QuizContext was used outside the quizProvider");
return context;
}

export { QuizProvider, useQuiz }