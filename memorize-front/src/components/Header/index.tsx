import logo from "../../assets/flashcard-icon.png";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logout } from "../../store/actions/login";

const Header = () => {

  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.login.isLogged);
  console.log(isLogged)
 
  const username = useAppSelector((state) => state.login.username);

  const handleDisconnectClick = () => {
    dispatch(logout());
  }


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

          {!isLogged && 
            <button 
              className="btn-header border-2 px-5 mx-5 border-black rounded-md"
              onClick={handleDisconnectClick}
            >
              Déconnexion
            </button>
          }
          {!isLogged && 
            <p>Bienvenue {username}</p>         
          }
         
        </div>
      </header>
    </>
  );
};

export default Header;
