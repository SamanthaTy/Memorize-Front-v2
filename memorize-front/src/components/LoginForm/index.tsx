//import { useState } from "react";
import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleModal } from "../../store/actions/modal";
import SignUpFormModal from "./SignUpFormModal";
import { login } from "../../store/actions/login";


function LoginForm() {

  const [formValues, setFormValues] = useState({
    email: "archiballe@gmail.com", 
    password: "archiballe"
  });

  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.login.username);
  const isLogged = useAppSelector((state) => state.login.isLogged);

  const handleToggleClick = () => {
    dispatch(toggleModal())
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(formValues));
    console.log(dispatch(login(formValues)));
    
  };

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
          aria-label='Adresse E-mail'
          className="w-full border-2 border-gray-300 p-2 rounded-md"
          value={formValues.email}
          onChange={handleChangeField}
        />
        <input
          type="password"
          name="password"
          placeholder="Entrer votre Password"
          aria-label='Mot de passe'
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
              handleToggleClick()
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
