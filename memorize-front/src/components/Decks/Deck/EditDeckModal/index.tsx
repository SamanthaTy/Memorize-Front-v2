import ModalContainer from "../../../ModalContainer";

const EditDeckModal = ({isOpen, onClose} : {isOpen: boolean, onClose: () => void}) => {
  return (
   <ModalContainer isOpen={isOpen} onClose={onClose} modalTitle="Modifier le deck">
   <input
        type="text"
        placeholder="Modifier le nom du deck"
        className="w-full border-2 border-gray-300 p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Modifier la description du deck"
        className="w-full border-2 border-gray-300 p-2 rounded-md"
      />
  </ModalContainer>
  )
};

export default EditDeckModal;