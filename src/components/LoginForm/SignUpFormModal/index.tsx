import ModalContainer, { ModalProps } from "../../ModalContainer";
import { useAppDispatch } from "../../../hooks/redux";
import { useState } from "react";
import { createUser } from "../../../store/actions/user/createUser";

//We use the ModalContainer created separately to use it as a template into which we can inject additional elements. 
//Here the inputs are the children of ModalContainer.

function SignUpFormModal({isOpen, onClose} : ModalProps) {

const [userData, setUserData] = useState({
  username: "",
  email: "",
  password: "",
});

const dispatch = useAppDispatch();

const handleCreateUserSubmit = () => {
  dispatch(createUser(userData))
}


const handleCreateUserField = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;

  console.log(name, value);
  setUserData({ ...userData, [name]: value });
};

  return (
    <ModalContainer
      isOpen={isOpen} 
      onClose={onClose} 
      modalTitle="Créer un compte"
      handleSubmitType={handleCreateUserSubmit}>
        
        <input
        type="text"
        name="username"
        placeholder="Identifiant"
        className="w-full border-2 border-gray-300 p-2 rounded-md"
        value={userData.username}
        onChange={handleCreateUserField}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border-2 border-gray-300 p-2 rounded-md"
          value={userData.email}
          onChange={handleCreateUserField}
        />
        
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          className="w-full border-2 border-gray-300 p-2 rounded-md"
          value={userData.password}
          onChange={handleCreateUserField}
        />
    </ModalContainer>
  );
}

export default SignUpFormModal;
