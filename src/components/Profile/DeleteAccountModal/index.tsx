import ModalContainer, { ModalProps } from "../../ModalContainer";

const DeleteAccountModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} modalTitle="Supprimer votre compte">
      <p>Êtes vous sure de vouloir supprimer votre compte</p>
    </ModalContainer>
  );
};

export default DeleteAccountModal;
