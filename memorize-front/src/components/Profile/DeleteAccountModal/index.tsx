import ModalContainer, { ModalProps } from "../../ModalContainer";

const DeleteAccountModal = ({
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

export default DeleteAccountModal;
