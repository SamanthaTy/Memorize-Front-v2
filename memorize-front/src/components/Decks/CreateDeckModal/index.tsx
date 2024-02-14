import ModalContainer from "../../ModalContainer";

const CreateDeckModal = () => {
  return (
    <ModalContainer>
      <h2>Créer un nouveau deck</h2>
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