import ModalContainer from "../../ModalContainer";

const CreateDeckModal = ({isOpen, onClose} : {isOpen: boolean, onClose: () => void}) => {
  return (
    <ModalContainer 
      isOpen={isOpen} 
      onClose={onClose} 
      modalTitle="Créer un nouveau Deck">
      <input
        type="text"
        placeholder="Nom du nouveau deck"
        className="w-full border-2 border-gray-300 p-2 rounded-md"
      />
      <input
        type="email"
        placeholder="Description du nouveau deck"
        className="w-full border-2 border-gray-300 p-2 rounded-md"
      />
    </ModalContainer>
  )
};

export default CreateDeckModal;