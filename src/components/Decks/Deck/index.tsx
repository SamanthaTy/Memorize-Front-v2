import { useEffect, useState } from "react";
import DeleteDeckModal from "./DeleteDeckModal";
import "./styles.scss";
import EditDeckModal from "./EditDeckModal";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useParams } from "react-router-dom";
import { getAllDecks } from "../../../store/actions/decks/allDecks";

const Deck = () => {

  const {id} = useParams()
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const allDecks = useAppSelector((state) => state.allDecks.decks)
  console.log("Je suis Alldecks: ", allDecks)

useEffect(() => {
  dispatch(getAllDecks(id));
}, [])

  return (
    <>
    {allDecks.map((deck) => 
    <div key={deck.id} className="decks-container flex">
      <div className="flip-card">
        <div className="flex flip-card-inner">
          <div className="flip-card-front">
            <h3 className="title py-2">{deck.name}</h3>
            <p className="text-sm">{deck.description}</p>
            <p className="text-xs">15 cartes</p>
            <ul className="text-sm">
              <li>Easy : 5</li>
              <li>Medium : 5</li>
              <li>Hard : 5</li>
            </ul>

            <button className="session-btn border-2 rounded-full border-white p-1 m-3">
              START
            </button>

            <button
              className="edit-btn p-0.5 m-0.5"
              onClick={() => {
                setIsEditModalOpen(true);
              }}
            >
              Modifier
            </button>
            <EditDeckModal
              isOpen={isEditModalOpen}
              onClose={() => {
                setIsEditModalOpen(false);
              }}
            />

            <button
              className="delete-btn p-0.5 m-0.5"
              onClick={() => {
                setIsDeleteModalOpen(true);
              }}
            >
              Supprimer
            </button>
            <DeleteDeckModal
              isOpen={isDeleteModalOpen}
              onClose={() => {
                setIsDeleteModalOpen(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  );
};

export default Deck;
