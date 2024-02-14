import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { toggleModal } from "../../store/actions/modal";
import Card from "./Card";
import CreateCardModal from "./CreateCardModal";
import DeleteCardModal from "./DeleteCardModal";
import EditCardModal from "./EditCardModal";

function Cards() {
  const dispatch = useAppDispatch();
  const modalIsOpen = useAppSelector((state) => state.modal.modalIsOpen);
  const modalType = useAppSelector((state) => state.modal.modalType);

  const handleToggleCreateClick = () => {
    dispatch(toggleModal({ modalType: "create" }));
  };

  const handleToggleEditClick = () => {
    dispatch(toggleModal({ modalType: "edit" }));
  };

  const handleToggleDeleteClick = () => {
    dispatch(toggleModal({ modalType: "delete" }));
  };

  return (
    <main className="container mx-auto p-4">
      <div className="flex space-x-4 mb-4">
        <button
          onClick={handleToggleEditClick}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Edit
        </button>

        <h2 className="text-3xl font-bold">Nom du Deck</h2>
        <button
          onClick={handleToggleDeleteClick}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
        <button
          onClick={handleToggleCreateClick}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Nouvelle Carte
        </button>

        <input
          type="text"
          placeholder="Chercher vos cartes"
          className="border p-2 rounded"
        />
      </div>

      {modalIsOpen && (
        <>
          {modalType === "edit" && <EditCardModal />}
          {modalType === "create" && <CreateCardModal />}
          {modalType === "delete" && <DeleteCardModal />}
        </>
      )}

      <Card />
    </main>
  );
}

export default Cards;
