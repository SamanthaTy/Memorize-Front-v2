import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/memorize logo.png";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logout } from "../../store/actions/login";

const Header = () => {
  // Use the state stored in our reducer so the button "Déconnection" and the welcome text only appear when the user is logged in.
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.login.isLogged);
  console.log(isLogged);

  const navigate = useNavigate();

  const handleDisconnectClick = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="bg-F5E9E0 text-1F3D75 h-21 flex items-center justify-between p-4">
      <div className="flex items-center">
        <a href="/">
          <img src={logo} alt="Logo Mem'O'rize" className="h-20 mr-2" />
        </a>
        <div className="flex items-center"></div>
        <a href="/" className="text-xl font-semibold">
          MEM'O'RIZE
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          className="px-4 py-2 rounded-full transition-colors duration-300 ease-in-out hover:bg-1F3D75 hover:text-F5E9E0"
          to="/"
        >
          Accueil
        </Link>

        {isLogged && (
          <>
            <Link
              className="px-4 py-2 rounded-full transition-colors duration-300 ease-in-out hover:bg-1F3D75 hover:text-F5E9E0"
              to="/profile"
            >
              Mon compte
            </Link>

            <Link
              className="px-4 py-2 rounded-full transition-colors duration-300 ease-in-out hover:bg-1F3D75 hover:text-F5E9E0"
              to="/decks"
            >
              Mes decks
            </Link>
            <button
              className="px-4 py-2 rounded-full transition-colors duration-300 ease-in-out hover:bg-1F3D75 hover:text-F5E9E0"
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
