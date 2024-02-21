import { useState } from "react";

import CreateCardModal from "./CreateCardModal";
import EditDeckModal from "../Decks/DeckList/Deck/EditDeckModal";
import DeleteDeckModal from "../Decks/DeckList/Deck/DeleteDeckModal";
import CardList from "./CardList";

function Cards() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [isEditDeckModalOpen, setIsEditDeckModalOpen] = useState(false);
  const [isDeleteDeckModalOpen, setIsDeleteDeckModalOpen] = useState(false);

  const handleCreateClick = () => {
    setIsCreateModalOpen(true);
  };

  return (
    
    <main className="container mx-auto p-4">

      <div className="flex space-x-4 mb-4">

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setIsEditDeckModalOpen(true);
          }}
        >
          Edit
        </button>

        <EditDeckModal
          isOpen={isEditDeckModalOpen}
          onClose={() => {
            setIsEditDeckModalOpen(false);
          }}
        />

        <h2 className="text-3xl font-bold">Nom du Deck</h2>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setIsDeleteDeckModalOpen(true);
          }}
        >
          Delete
        </button>
        <DeleteDeckModal
          isOpen={isDeleteDeckModalOpen}
          onClose={() => {
            setIsDeleteDeckModalOpen(false);
          }}
        />

        <button
          onClick={handleCreateClick}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Nouvelle Carte
        </button>
        <CreateCardModal
          isOpen={isCreateModalOpen}
          onClose={() => {
            setIsCreateModalOpen(false);
          }}
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
