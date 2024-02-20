import ModalContainer, { ModalProps } from "../../../../ModalContainer";

interface DeleteDeckModalProps extends ModalProps {
  deckId: number | null;
}
const DeleteDeckModal = ({isOpen, onClose, deckId } : DeleteDeckModalProps) => {
  return (
    <ModalContainer 
      isOpen={isOpen} 
      onClose={onClose} 
      modalTitle="Supprimer le deck" >
      <h2>Êtes-vous sûr de vouloir supprimer ce deck et ses cartes ?</h2>
    </ModalContainer>
  )
}

export default DeleteDeckModal;

