import { useState } from "react";
import SignUpFormModal from "./SignUpFormModal";


function LoginForm() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="flex items-center justify-center">
      <form>
        <input
          type="email"
          placeholder="Entrez votre Email"
          className="w-full border-2 border-gray-300 p-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Entrez votre Password"
          className="w-full border-2 border-gray-300 p-2 mt-2 rounded-md"
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
              openModal();
            }}
          >
            Inscrivez-vous
          </a>
        </p>
      </form>

      <SignUpFormModal openModal={openModal} closeModal={closeModal} modalIsOpen={modalIsOpen}/>
    </div>
  );
}

export default LoginForm;
