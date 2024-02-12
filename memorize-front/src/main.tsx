import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error/index.tsx";
import Home from "./components/Home/index.tsx";
import Decks from "./components/Decks/index.tsx";
import Cards from "./components/Cards/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

    children: [
      { index: true, element: <Home /> },
      { path: "/decks", element: <Decks /> },
      { path: "/decks/:id", element: <Cards /> }, // (user_id)
      //{path: "/profile", element: <Profile />},
      //{path: "/decks/:id/trainingsession", element: <TrainingSession />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
