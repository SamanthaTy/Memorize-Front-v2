import ModalContainer, { ModalProps } from "../../ModalContainer";

function SignUpFormModal({ openModal, closeModal, modalIsOpen }: ModalProps) {
  return (
    <ModalContainer
      openModal={openModal}
      closeModal={closeModal}
      modalIsOpen={modalIsOpen}
    >
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
