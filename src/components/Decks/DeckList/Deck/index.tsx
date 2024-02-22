import { useState } from "react";
import DeleteDeckModal from "./DeleteDeckModal";
import "./styles.scss";
import EditDeckModal from "./EditDeckModal";
import { Deck as DeckInterface } from "../../../../store/reducers/decks";
import editLogo from "../../../../assets/pencil.png";
import deleteLogo from "../../../../assets/trash.png";
import startLogo from "../../../../assets/go.png"

export interface DeckProps {
  deck: DeckInterface;
}

const Deck = ({ deck }: DeckProps) => {
  
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <div className="decks-container flex ">
      <div className="flip-card ">
        <div className="flex flip-card-inner ">
          <div className="flip-card-front text-black">
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

          <div className="flex justify-center ">
            <input 
              type="image"
              src={startLogo}
              className="size-10 "
            />
          </div>

          <div className="flex justify-center mb-3">
            <input
              type="image"
              src={editLogo}
              className="size-5 mr-10"
              onClick={() => {
                setIsEditModalOpen(true);
              }}
            />
            <EditDeckModal
              isOpen={isEditModalOpen}
              onClose={() => {
                setIsEditModalOpen(false);
              }}
              deckId={deck.id}
            />

            <input
              type="image"
              src= {deleteLogo}
              className="size-5 ml-10"
              onClick={() => {
                setIsDeleteModalOpen(true);
              }}
            />
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
    </div>
  );
};

export default Deck;
