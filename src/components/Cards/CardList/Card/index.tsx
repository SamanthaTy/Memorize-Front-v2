import { useState } from "react";
import "./style.scss";
import EditCardModal from "./EditCardModal";
import DeleteCardModal from "./DeleteCardModal";
import { CardInterface } from "../../../../store/reducers/cards";

export interface CardProps {
  card: CardInterface;
}

function Card({card}: CardProps) {
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
    <div>
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
      
      <div className="flex gap-2 mt-2 justify-center item-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
          onClick={handleEditClick}
        >
          Edit
        </button>
        <EditCardModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
          }}
        />
        <button
          className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
        <DeleteCardModal
          isOpen={isDeleteModalOpen}
          onClose={() => {
            setIsDeleteModalOpen(false);
          }}
        />
      </div>  
    </div>
  </> 
  );

}

export default Card;