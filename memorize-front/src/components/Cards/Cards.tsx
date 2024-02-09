function Cards() {
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
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Nouvelle Carte
        </button>

        <input
          type="text"
          placeholder="Chercher vos cartes"
          className="border p-2 rounded"
        />
      </div>
    </main>
  );
}

export default Cards;
