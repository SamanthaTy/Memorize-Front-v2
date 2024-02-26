import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getAllTrainingCards } from "../../store/actions/trainingSession/getTrainingCards";
import { SetStateAction, useEffect, useState } from "react";
import { editTrainingCards } from "../../store/actions/trainingSession/newTrainingCards";




function TrainingSession() {
  const { deckId } = useParams()
  const dispatch = useAppDispatch()
  const [flip, setFlip] = useState(false);
  const [countFlip, setCountFlip] = useState(0);

  const handleCardClick = () => {
    setFlip(!flip)
    setCountFlip(countFlip + 1)
  };

// const { currentDifficulty } = useAppSelector((state) => state.trainingCards)
// if (currentDifficulty === 0) return null;
 
const [cardIndex, setCardIndex] = useState(0);


const handleNextCard = () => {
if (cardIndex < cards.length -1) {
  setCardIndex(cardIndex + 1)
  setCountFlip(0)
  setFlip(false)
  } 
}

const cards = useAppSelector((state) => state.trainingCards.cards);

// const [cardCurrentDifficulty, setCardCurrentDifficulty] = useState(0);
// const [cardsArray, setCardsArray] = useState(cards);
// const [isHard, setIsHard] = useState(false);

let card = cards[cardIndex];
console.log(card);
// const cardId = card.id
// const updatedCards = [];

const handleCurrentDifficultyClick = (event) => {

  const newCard = { ...card, currentDifficulty: parseInt(event.target.value, 10)}
  console.log("I am card", card);
  console.log("I am cardIndex", cardIndex);
  console.log(card.currentDifficulty);
  const newCardsTest = cards.map((card) => card.id === newCard.id ? newCard : card)
  console.log(newCardsTest)
  // return newCardsTest;

  // setCardsArray(newCardsTest)
// dispatch(editTrainingCards({ deckId, cardId, newCardsTest }))
}



console.log(card);

useEffect(()=> {
  dispatch(getAllTrainingCards(deckId)) 
}, [])


 
  return (
    <>
      <h1 className="flex justify-center title py-2">
        Training session
      </h1>
      
      <div className="flex justify-center title">
        {cards.length > 0 && (
          <div key={cards[cardIndex].id}
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
      { countFlip > 0 && 
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
      }
        <div className="flex w-32">
          <div className="flex justify-start">
            { cardIndex < cards.length -1 &&  cards[cardIndex].currentDifficulty > 0 &&
            <button className="block bg-cyan-500 w-24 p-4 ml-10 rounded text-white m-2" 
            onClick={handleNextCard}>
           Next
            </button>
            }
            { cardIndex === cards.length -1 && cards[cardIndex].currentDifficulty > 0 &&
            <button className="block bg-cyan-500 w-24 p-4 ml-10 rounded text-white m-2" 
            onClick={handleNextCard}>
           Finish
            </button>
            }
          </div>
        </div>

        <div className="flex justify-end w-64">
            <Link to="/" className="flex justify-end">
              <button className="block bg-black p-4 rounded text-white m-2 font-semibold" >End session</button>
            </Link>
        </div>        
      </div>  
    </>
  )
}

export default TrainingSession;