
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import Decks from "./components/Decks/index.tsx";
import Home from "./components/Home/index.tsx";
import Cards from "./components/Cards/index.tsx";
import { CheckAuthentication} from "./components/CheckAuthentication";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import Profile from "./components/Profile/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {index: true, element: <Home />},

      {path: "/decks", 
      element: CheckAuthentication(<Decks />)},

      {path: "/decks/:id", element: <Cards />}, // (user_id)

      {path: "/profile", element: <Profile />},
      //{path: "/decks/:id/trainingsession", element: <TrainingSession />},
    ]
  }
])


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


