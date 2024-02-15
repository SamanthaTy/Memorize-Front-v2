import { useState } from "react";

import Card from "./Card";
import CreateCardModal from "./CreateCardModal";

function Cards() {
  const handleCreateClick = () => {
    setIsCreateModalOpen(true);
  };

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <main className="container mx-auto p-4">
      <div className="flex space-x-4 mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Edit
        </button>

        <h2 className="text-3xl font-bold">Nom du Deck</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Delete
        </button>
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

      <Card />
    </main>
  );
}

export default Cards;
