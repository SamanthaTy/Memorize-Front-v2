import { Link } from "react-router-dom";
import logo from "../../assets/Rengoku.png";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logout } from "../../store/actions/login";

const Header = () => {

// Use the state stored in our reducer so the button "Déconnection" and the welcome text only appear when the user is logged in. 
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.login.isLogged);
  console.log(isLogged)
 
  const username = useAppSelector((state) => state.login.username);

  const handleDisconnectClick = () => {
    dispatch(logout());
  }

  return (
    <>
      <header className="header-container border-b-4 border-orange-600 ">

        <div className="w-screen flex justify-between h-10 box-content py-10">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo Mem'O'rize" className="flex max-w-32" />
          </Link>
          <Link to="/">
          <h1 className="title flex">MEM'O'RIZE</h1>
          </Link>
        </div>

          <div className="btn-container flex content-end">
            <Link to= "/profile"
              className="btn-header border-2 px-5 pt-1.5 mx-5 border-black rounded-md"
            >
              Mon compte
            </Link>

            <Link to="/decks"
              className="btn-header border-2 px-5 pt-1.5 mx-5 border-black rounded-md"
              >
              Mes decks
            </Link>

            {isLogged && 
              
              <button 
                className="flex btn-header border-2 px-5 pt-1.5 mx-5 border-black rounded-md"
                onClick={handleDisconnectClick}
              >
                Déconnexion
              </button>
            }
          </div>
        </div>
          {isLogged && 
            <div className="flex justify-end">
              <p className="flex justify-end pr-5 pb-2">Bienvenue {username}</p> 
            </div>        
          }
         
        
      </header>
    </>
  );
};

export default Header;
