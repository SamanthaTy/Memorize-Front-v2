import React, { useState } from "react";
import DeleteDeckModal from "./DeleteDeckModal"
import "./styles.scss";

const Deck = () => {

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <div className="decks-container flex">
      <div className="flip-card">
        <div className="flex flip-card-inner">
            <div className="flip-card-front">
                <h3 className="title py-2">Nom du deck</h3>
                <p className="text-xs">15 cartes</p>
                <ul className="text-sm">
                  <li>Easy : 5</li>
                  <li>Medium : 5</li>
                  <li>Hard : 5</li>
                </ul>

                <button 
                className="session-btn border-2 rounded-full border-white p-1 m-3">
                  START
                </button>
                
                <button 
                className="edit-btn p-0.5 m-0.5">
                  Modifier
                </button>

                <button 
                className="delete-btn p-0.5 m-0.5"
                onClick={(event) => {
                  setIsDeleteModalOpen(true);
                }}>
                  Supprimer
                </button>

                <DeleteDeckModal 
                isOpen={isDeleteModalOpen} 
                onClose={() => {setIsDeleteModalOpen(false)}}
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Deck;
