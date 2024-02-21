import ModalContainer, { ModalProps } from "../../../../ModalContainer";

const EditCardModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      modalTitle="Modifier une carte"
    >
      <input
        type="text"
        placeholder="Modifier votre question"
        className="w-full border-2 border-gray-300 p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Modifier votre réponse"
        className="w-full border-2 border-gray-300 p-2 rounded-md"
      />
    </ModalContainer>
  );
};

export default EditCardModal;