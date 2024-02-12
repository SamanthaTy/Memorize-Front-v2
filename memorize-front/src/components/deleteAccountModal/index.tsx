import ModalContainer, { ModalProps } from "../ModalContainer";

const deleteAccountModal = ({
  openModal,
  closeModal,
  modalIsOpen,
}: ModalProps) => {
  return (
    <ModalContainer
      openModal={openModal}
      closeModal={closeModal}
      modalIsOpen={modalIsOpen}
    >
      <p>Êtes vous sure de vouloir supprimer votre compte</p>
    </ModalContainer>
  );
};

export default deleteAccountModal;
