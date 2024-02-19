import ModalContainer, { ModalProps } from "../../../ModalContainer";

const EditDeckModal = ({isOpen, onClose} : ModalProps) => {

  const handleEditDeckSubmit = () => {
  };
      
  const handleEditDeckField = (event) => {
  };

  return (
   <ModalContainer 
   isOpen={isOpen} 
   onClose={onClose} 
   modalTitle="Modifier le deck"
   handleSubmitType={handleEditDeckSubmit}>
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