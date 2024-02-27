import { useState } from "react";

import CreateCardModal from "./CreateCardModal";
import EditDeckModal from "../Decks/DeckList/Deck/EditDeckModal";
import DeleteDeckModal from "../Decks/DeckList/Deck/DeleteDeckModal";
import CardList from "./CardList";
import { useParams } from "react-router-dom";
import editLogo from "../../assets/pencil.png";
import deleteLogo from "../../assets/trash.png";

function Cards() {
  const { deckId } = useParams();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [isEditDeckModalOpen, setIsEditDeckModalOpen] = useState(false);
  const [isDeleteDeckModalOpen, setIsDeleteDeckModalOpen] = useState(false);

  const handleCreateClick = () => {
    setIsCreateModalOpen(true);
  };

  return (
    <main className="container mx-auto p-4">
      <div className="flex space-x-4 mb-4">
        <input
          type="image"
          src={editLogo}
          className="size-5 mt-3"
          onClick={() => {
            setIsEditDeckModalOpen(true);
          }}
        />
        <EditDeckModal
          isOpen={isEditDeckModalOpen}
          onClose={() => {
            setIsEditDeckModalOpen(false);
          }}
        />

        <h2 className="text-3xl font-bold text-1F3D75">Nom du Deck</h2>

        <input
          type="image"
          src={deleteLogo}
          className="size-5 mt-3"
          onClick={() => {
            setIsDeleteDeckModalOpen(true);
          }}
        />
        <DeleteDeckModal
          isOpen={isDeleteDeckModalOpen}
          onClose={() => {
            setIsDeleteDeckModalOpen(false);
          }}
        />

        <button
          onClick={handleCreateClick}
          className="px-4 py-2 bg-B4ABCE text-white rounded transition-colors duration-300 ease-in-out hover:bg-F5E9E0 hover:text-1F3D75"
        >
          Nouvelle Carte
        </button>
        <CreateCardModal
          isOpen={isCreateModalOpen}
          onClose={() => {
            setIsCreateModalOpen(false);
          }}
          deckId={deckId}
        />

        <input
          type="text"
          placeholder="Chercher vos cartes"
          className="border p-2 rounded"
        />
      </div>

      <div className="flex flex-wrap">
        <CardList />
      </div>
    </main>
  );
}

export default Cards;
