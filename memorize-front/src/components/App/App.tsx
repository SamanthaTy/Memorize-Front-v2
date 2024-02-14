import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

import Modal from "react-modal";

import { useEffect } from "react";
import { tokenCheck } from "../../store/actions/login";
import { useAppDispatch } from "../../hooks/redux";


function App() {
  Modal.setAppElement("#root");


  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchTokenCheck = async () => {
      try {
        await dispatch(tokenCheck());
      } catch (error) {
        console.log(error);
      }
    };

    fetchTokenCheck();
  }, [dispatch]);

// With React Router, we use App as the root element. The components Header and Footer will be common to all the pages and Outlet will allow the app to insert the component to render per URL


  return (
    <div>
      <Header />
      <main className="flex flex-col justify-items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
