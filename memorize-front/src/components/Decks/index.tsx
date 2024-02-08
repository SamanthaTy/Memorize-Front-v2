import React from "react";

const Decks = () => {

  return (
    <main className="flex box-content">
      <h2 className="flex">Salut User !</h2>
      <div className="flex justify-end">
        <button className="border-2 px-5 mx-5 border-black rounded-md">Créer un nouveau deck</button>
        <div className="search-container">
          <input type="search" placeholder="Chercher les decks" className="border-2 border-gray-300 p-2 mt-2 rounded-md"/>
          <button className="bg-blue-500 text-white p-2 mt-2 rounded-md">Search</button>
        </div>
      </div>  
    </main>
  )
}

export default Decks;