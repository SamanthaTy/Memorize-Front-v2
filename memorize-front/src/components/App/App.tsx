


import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

import Modal from "react-modal";
import Profile from "../Profile";




function App() {
  Modal.setAppElement("#root");

  return (

    <div >
      <Header />
      <main className="flex flex-col justify-items-center">


        <Profile />

        <Outlet />

      </main>
      <Footer />
    </div>
  );

}

export default App;
