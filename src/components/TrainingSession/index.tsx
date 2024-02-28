import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  getAllTrainingCards,
  newCardArray,
  setCurrentDifficulty,
} from "../../store/actions/trainingSession/getTrainingCards";
import { SetStateAction, useEffect, useState } from "react";
import { editTrainingCards } from "../../store/actions/trainingSession/newTrainingCards";
import { updateTrainingCards } from "../../store/actions/trainingSession/updateTrainingCards";

function TrainingSession() {
  const { deckId } = useParams();
  const [flip, setFlip] = useState(false);
  const [countFlip, setCountFlip] = useState(0);
  const [isDifficultySelected, setIsDifficultySelected] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const dispatch = useAppDispatch();

  const handleCardClick = () => {
    setFlip(!flip);
    setCountFlip(countFlip + 1);
  };

  const cards = useAppSelector((state) => state.trainingCards.cards);

  let card = cards[cardIndex];

  console.log(cardIndex);
  console.log(cards.length);

  const cardsLeftToMemorize = cards.filter(
    (card) => card.isCardMemorized === false
  ).length;
  console.log(cardsLeftToMemorize);

  const findHardCardIndex = cards.findIndex(
    (card) => card.isCardMemorized === false
  );
  console.log(findHardCardIndex);

  const handleCurrentDifficultyClick = (event) => {
    const id = card.id;
    const currentDifficulty = Number(event.target.value);
    dispatch(setCurrentDifficulty({ id, currentDifficulty }));
    setIsDifficultySelected(true);
  };

  const handleNextCard = (event) => {
    const id = card.id;
    console.log(id);
    if (cardIndex < cards.length - 1) {
      setCardIndex(cardIndex + 1);
    }

    setCountFlip(0);
    setFlip(false);
    setIsDifficultySelected(false);
  };

  const handleSessionEnd = () => {
    const updatedDifficulties = cards.reduce((obj, card) => {
      obj[card.id] = card.difficulty;
      return obj;
    }, {});

    dispatch(updateTrainingCards({ deckId, updatedDifficulties }));
  };

  console.log(card);
  console.log(cards);

  useEffect(() => {
    dispatch(getAllTrainingCards(deckId));
  }, []);

  return (
    <>
      <h1 className="flex justify-center title py-2">Training session</h1>
      <div className="flex justify-center title">
        {cardIndex < cards.length && (
          <div
            key={cards[cardIndex].id}
            className={`flip-card ${flip ? "flip" : ""}`}
            onClick={handleCardClick}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">{cards[cardIndex].front}</p>
              </div>
              <div className="flip-card-back">
                <p className="title">{cards[cardIndex].back}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        {countFlip > 0 && (
          <div className="flex justify-center">
            <div className="flex justify-end w-96"></div>
            <button
              value={1}
              className="block bg-green-500 p-4 w-24 rounded text-white m-2"
              onClick={handleCurrentDifficultyClick}
            >
              Easy
            </button>
            <button
              value={2}
              className="bg-blue-500 p-4 w-24 rounded text-white m-2"
              onClick={handleCurrentDifficultyClick}
            >
              Medium
            </button>
            <button
              value={3}
              className="bg-red-500 p-4 w-24 rounded text-white m-2"
              onClick={handleCurrentDifficultyClick}
            >
              Hard
            </button>
          </div>
        )}

        <div className="flex w-32">
          <div className="flex justify-start">
            {/* { cardsLeftToMemorize === 0 &&
            <button className="block bg-cyan-500 w-24 p-4 ml-10 rounded text-white m-2" 
            onClick={handleSessionEnd}>
           Finish
            </button>
            } */}
            {cardsLeftToMemorize > 0 && isDifficultySelected ? (
              <button
                className="block bg-cyan-500 w-24 p-4 ml-10 rounded text-white m-2"
                onClick={handleNextCard}
              >
                Next
              </button>
            ) : (
              ""
            )}
          </div>
        </div>

        {cardsLeftToMemorize === 0 ? (
          <div className="flex justify-end w-64">
            <Link to="/" className="flex justify-end">
              <button
                className="block bg-black p-4 rounded text-white m-2 font-semibold"
                onClick={handleSessionEnd}
              >
                End session
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default TrainingSession;
