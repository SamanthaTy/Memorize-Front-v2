import { useState } from "react";
import "./style.scss";

function Card() {
  // Set up a state boolean to know if the flip is true or false
  const [flip, setFlip] = useState(false);

  // Function who toggle the boolean state variable flip from true to false or from false to true
  const handleCardClick = () => {
    setFlip(!flip);
  };

  // Function to handle button click, event stop the click event propagation
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  return (
    <div
      className={`flip-card ${flip ? "flip" : ""}`}
      onClick={handleCardClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="title">QUESTION</p>
        </div>
        <div className="flip-card-back">
          <p className="title">ANSWER</p>
          <div className="flex justify-between absolute bottom-4 w-full">
            <button
              className="bg-gray-500 text-white px-4 py-2 ml-2 rounded"
              onClick={handleButtonClick}
            >
              Edit
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 mr-2 rounded"
              onClick={handleButtonClick}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
