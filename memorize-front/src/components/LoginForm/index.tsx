
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { toggleModal } from "../../store/actions/modal";
import { login } from "../../store/actions/login";
import SignUpFormModal from "./SignUpFormModal";


function LoginForm() {
// For now, we hard code the user info to log into his account.
  const [formValues, setFormValues] = useState({
    email: "archiballe@gmail.com",
    password: "archiballe",
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

// Handles the appearance of the Create an account modal when the user click on "inscrivez-vous"
  const handleToggleClick = () => {
    dispatch(toggleModal());
  };

// Handles sending the email and password sent to the API in order to let the user log into their account. 
// Once the user has successfully logged in, they're redirected to the page "/decks"
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await dispatch(login(formValues));
      navigate("/decks");
    } catch (error) {
      console.log(error);
    }
  };

// Handles the input fields for email and password and identifies them as the formValues' email and password.
  const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    console.log(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Entrer votre Email"
          aria-label="Adresse E-mail"
          className="w-full border-2 border-gray-300 p-2 rounded-md"
          value={formValues.email}
          onChange={handleChangeField}
        />
        <input
          type="password"
          name="password"
          placeholder="Entrer votre Password"
          aria-label="Mot de passe"
          className="w-full border-2 border-gray-300 p-2 mt-2 rounded-md"
          value={formValues.password}
          onChange={handleChangeField}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 mt-2 rounded-md"
        >
          Se connecter
        </button>
        <p className="mt-4 text-gray-600 flex items-center justify-center">
          Vous n'avez pas de compte?
          <a
            className="ml-2 flex items-center justify-center"
            href=""
            onClick={(event) => {
              event.preventDefault();
              handleToggleClick();
            }}
          >
            Inscrivez-vous
          </a>
        </p>
      </form>
      <SignUpFormModal />
    </div>
  );
}

export default LoginForm;
