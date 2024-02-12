
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import Decks from "./components/Decks/index.tsx";
import Home from "./components/Home/index.tsx";
import Cards from "./components/Cards/index.tsx";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.ts";

import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import './index.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './components/Home/index.tsx';
import Decks from './components/Decks/index.tsx';
import Cards from './components/Cards/index.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,


    children: [
      {index: true, element: <Home />},
      {path: "/decks", element: <Decks />},
      {path: "/decks/:id", element: <Cards />}, // (user_id)
      //{path: "/profile", element: <Profile />},
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


