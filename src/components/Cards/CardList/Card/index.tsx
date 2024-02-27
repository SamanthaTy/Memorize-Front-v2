import { useState } from "react";
import "./style.scss";
import EditCardModal from "./EditCardModal";
import DeleteCardModal from "./DeleteCardModal";
import { CardInterface } from "../../../../store/reducers/cards";

export interface CardProps {
  card: CardInterface;
}

function Card({ card }: CardProps) {
  // Set up a state boolean to know if the flip is true or false
  const [flip, setFlip] = useState(false);

  // Function who toggle the boolean state variable flip from true to false or from false to true
  const handleCardClick = () => {
    setFlip(!flip);
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      <div className="mt-2 mx-1">
        <div
          className={`flip-card ${flip ? "flip" : ""}`}
          onClick={handleCardClick}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">{card.front}</p>
            </div>
            <div className="flip-card-back">
              <p className="title">{card.back}</p>
            </div>
          </div>
        </div>

        <div className="flex mt-2 justify-center item-center gap-2">
          <button
            className="bg-1F3D75 text-F5E9E0 px-4 py-2 mt-4 rounded transition-colors duration-300 ease-in-out hover:bg-F5E9E0 hover:text-1F3D75"
            onClick={handleEditClick}
          >
            Edit
          </button>
          <EditCardModal
            isOpen={isEditModalOpen}
            onClose={() => {
              setIsEditModalOpen(false);
            }}
            cardId={card.id}
          />
          <button
            className="bg-1F3D75 text-F5E9E0 px-4 py-2 mt-4 rounded transition-colors duration-300 ease-in-out hover:bg-F5E9E0 hover:text-1F3D75"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
          <DeleteCardModal
            isOpen={isDeleteModalOpen}
            onClose={() => {
              setIsDeleteModalOpen(false);
            }}
            cardId={card.id}
          />
        </div>
      </div>
   </> 
  );
}

export default Card;
