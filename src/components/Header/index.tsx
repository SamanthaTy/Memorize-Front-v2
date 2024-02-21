import logo from "../../assets/flashcard-icon.png";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logout } from "../../store/actions/login";

const Header = () => {
  // Use the state stored in our reducer so the button "Déconnection" and the welcome text only appear when the user is logged in.
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.login.isLogged);
  console.log(isLogged);

  const username = useAppSelector((state) => state.login.username);

  const handleDisconnectClick = () => {
    dispatch(logout());
  };

  return (
    <header className="header-container w-screen flex justify-between h-16 border-b-4 box-content p-4">
      <div className="flex items-center">
        <a href="/">
          <img src={logo} alt="Logo Mem'O'rize" className="flex" />
        </a>
        <a href="/">
          <h1 className="title flex text-xl font-semibold ml-2">MEM'O'RIZE</h1>
        </a>
      </div>
      <div className="btn-container flex items-center space-x-4">
        <a
          className="btn-header border-2 px-4 py-2 border-black rounded-md"
          href="/profile"
        >
          Mon compte
        </a>

        <a
          className="btn-header border-2 px-4 py-2 border-black rounded-md"
          href="/decks"
        >
          Mes decks
        </a>

        {isLogged && (
          <>
            <button
              className="btn-header border-2 px-4 py-2 border-black rounded-md"
              onClick={handleDisconnectClick}
            >
              Déconnexion
            </button>
            <p className="text-white">Bienvenue {username}</p>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
