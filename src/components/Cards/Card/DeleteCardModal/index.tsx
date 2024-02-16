import ModalContainer, { ModalProps } from "../../../ModalContainer";

const DeleteCardModal = ({isOpen, onClose}: ModalProps) => {
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} modalTitle="Supprimer une carte">
      <p>Êtes vous sure de vouloir supprimer votre carte</p>
    </ModalContainer>
  );
};

export default DeleteCardModal;