import ModalContainer, { ModalProps } from "../../ModalContainer";

//We use the ModalContainer created separately to use it as a template into which we can inject additional elements. 
//Here the inputs are the children of ModalContainer.
function SignUpFormModal({isOpen, onClose} : ModalProps) {
  return (
    <ModalContainer
      isOpen={isOpen} 
      onClose={onClose} 
      modalTitle="Créer un compte">
        <input
        type="text"
        placeholder="Identifiant"
        className="w-full border-2 border-gray-300 p-2 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border-2 border-gray-300 p-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full border-2 border-gray-300 p-2 rounded-md"
        />
    </ModalContainer>
  );
}

export default SignUpFormModal;
