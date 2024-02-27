import { useState } from "react";
import DeleteDeckModal from "./DeleteDeckModal";
import "./styles.scss";
import EditDeckModal from "./EditDeckModal";
import { Deck as DeckInterface } from "../../../../store/reducers/decks";
import { useNavigate, useParams } from "react-router-dom";



export interface DeckProps {
  deck: DeckInterface;
}

const Deck = ({ deck }: DeckProps) => {
 
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const navigate = useNavigate();

  const { deckId } = useParams()

  
  const handleClickSession = () => {
    console.log(deckId);
    navigate(`/decks/${deck.id}/trainingsession`)
    }
    

  return (
    <div className="decks-container flex">
      <div className="flip-card">
        <div className="flex flip-card-inner">
          <div className="flip-card-front">
            <a href={`/decks/${deck.id}`}>
            <h3 className="title py-2" >{deck.name}</h3>
            </a>
            <p className="text-sm">{deck.description}</p>
            <p className="text-xs">15 cartes</p>
            <ul className="text-sm">
              <li>Easy : 5</li>
              <li>Medium : 5</li>
              <li>Hard : 5</li>
            </ul>

            <button className="session-btn border-2 rounded-full border-white p-1 m-3"
            onClick={handleClickSession}>
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
              deckId={deck.id}
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
              deckId={deck.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deck;
