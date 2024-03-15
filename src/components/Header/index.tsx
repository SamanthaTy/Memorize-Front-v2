import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/memorize logo.png";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logout } from "../../store/actions/login";

const Header = () => {
  // Use the state stored in our reducer so the button "Déconnection" and the welcome text only appear when the user is logged in.
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.login.isLogged);
  console.log(`Am I currently logged in ? ${isLogged ? "Yes" : "No"}`);

  const navigate = useNavigate();

  const handleDisconnectClick = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="bg-F5E9E0 text-1F3D75 h-21 flex flex-col items-center justify-between w-full xl:flex-row ">
      <div className="flex items-center flex-col xl:flex-row xl:flex-start">
        <Link to="/" className="flex flex-col">
          <img src={logo} alt="Logo Mem'O'rize" className="flex flex-col w-32 sm:w-28 xl:w-20 xl:flex-row xl:flex-start" />
        </Link>
        <div className="flex items-center">
          <Link to="/" 
            className="flex text-xl font-semibold ">
            MEM'O'RIZE
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap justify-center space-x-3 mt-2 mb-2 xl:items-center xl:mr-4 ">
        <Link
          className="rounded-full transition-colors duration-300 ease-in-out hover:bg-1F3D75 hover:text-F5E9E0 p-2"
          to="/"
        >
          Accueil
        </Link>

        {isLogged && (
          <>
            <Link
              className=" rounded-full transition-colors duration-300 ease-in-out hover:bg-1F3D75 hover:text-F5E9E0 p-2"
              to="/profile"
            >
              Mon compte
            </Link>

            <Link
              className=" rounded-full transition-colors duration-300 ease-in-out hover:bg-1F3D75 hover:text-F5E9E0 p-2"
              to="/decks"
            >
              Mes decks
            </Link>
            <button
              className=" rounded-full transition-colors duration-300 ease-in-out hover:bg-1F3D75 hover:text-F5E9E0 p-2"
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

