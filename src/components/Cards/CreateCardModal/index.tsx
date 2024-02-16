import ModalContainer, { ModalProps } from "../../ModalContainer";

const CreateCardModal = ({ isOpen, onClose }: ModalProps) => {

const CreateCardModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      modalTitle="Créer une carte"
    >
      <input
        type="text"
        placeholder="Nouvelle question"
        className="w-full border-2 border-gray-300 p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Nouvelle réponse"
        className="w-full border-2 border-gray-300 p-2 rounded-md"
      />
    </ModalContainer>
  );
};

export default CreateCardModal;
