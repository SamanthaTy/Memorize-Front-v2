import { useState } from "react";

import Card from "./Card";
import CreateCardModal from "./CreateCardModal";
import EditCardModal from "./Card/EditCardModal";
import DeleteCardModal from "./Card/DeleteCardModal";
import EditDeckModal from "../Decks/Deck/EditDeckModal";
import DeleteDeckModal from "../Decks/Deck/DeleteDeckModal";

function Cards() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [isEditDeckModalOpen, setIsEditDeckModalOpen] = useState(false);
  const [isDeleteDeckModalOpen, setIsDeleteDeckModalOpen] = useState(false);

  const handleCreateClick = () => {
    setIsCreateModalOpen(true);
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
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

        <input
          type="text"
          placeholder="Chercher vos cartes"
          className="border p-2 rounded"
        />
      </div>

      <CreateCardModal
        isOpen={isCreateModalOpen}
        onClose={() => {
          setIsCreateModalOpen(false);
        }}
      />

      <div className="space-x-4">
        <Card />
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
          onClick={handleEditClick}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
          onClick={handleDeleteClick}
        >
          Delete
        </button>

        <EditCardModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
          }}
        />

        <DeleteCardModal
          isOpen={isDeleteModalOpen}
          onClose={() => {
            setIsDeleteModalOpen(false);
          }}
        />
      </div>
    </main>
  );
}

export default Cards;
