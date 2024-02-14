import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

import Modal from "react-modal";

function App() {
  Modal.setAppElement("#root");

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
