import logo from "../../assets/flashcard-icon.png";

const Header = () => {
  return (
    <>
      <header className="header-container w-screen flex justify-between h-10 border-b-4 box-content py-10">
        <div className="flex">
          <img src={logo} alt="Logo Mem'O'rize" />
          <h1 className="title">MEM'O'RIZE</h1>
        </div>
        <div className="btn-container flex content-end">
          <button className="btn-header border-2 px-5 mx-5 border-black rounded-md">
            Mon compte
          </button>
          <button className="btn-header border-2 px-5 mx-5 border-black rounded-md">
            Mes decks
          </button>
          <button className="btn-header border-2 px-5 mx-5 border-black rounded-md">
            Déconnexion
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
