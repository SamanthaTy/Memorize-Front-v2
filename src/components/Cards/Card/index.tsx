import { useState } from "react";
import "./style.scss";

function Card() {
  // Set up a state boolean to know if the flip is true or false
  const [flip, setFlip] = useState(false);

  // Function who toggle the boolean state variable flip from true to false or from false to true
  const handleCardClick = () => {
    setFlip(!flip);
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
        </div>
      </div>
    </div>
  );
}

export default Card;
