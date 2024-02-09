import Card from "../Card";
import Cards from "../Cards/Cards";
import Footer from "../Footer";
import Header from "../Header";
import Introduction from "../Introduction";
import LoginForm from "../LoginForm";
import Modal from "react-modal";
import Profile from "../Profile";

function App() {
  Modal.setAppElement("#root");

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="flex flex-col justify-items-center">
        <Introduction />
        <LoginForm />
        <Cards />
        <Card />
        <Profile />
      </main>
      <Footer />
    </div>
  );
}

export default App;
