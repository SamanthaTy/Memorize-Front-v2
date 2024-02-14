import ModalContainer from "../../../ModalContainer";

const DeleteDeckModal = ({isOpen, onClose} : {isOpen: boolean, onClose: () => void}) => {
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <h2>Êtes-vous sûr de vouloir supprimer ce deck et ses cartes ?</h2>
    </ModalContainer>
  )
}

export default DeleteDeckModal;

