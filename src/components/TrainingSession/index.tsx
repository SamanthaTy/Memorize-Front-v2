import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getAllTrainingCards } from "../../store/actions/trainingSession/getTrainingCards";
import { SetStateAction, useEffect, useState } from "react";




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
const [finishedCards, setFinishedCard] = useState();


const handleNextCard = () => {
if (cardIndex < cards.length -1) {
  setCardIndex(cardIndex + 1)
  setCountFlip(0)
  setFlip(false)
  setCurrentDifficulty(0)
  
} 
}


const [currentDifficulty, setCurrentDifficulty] = useState(0)

const handleCurrentDifficultyClick = (event) => {
  setCurrentDifficulty(event.target.value);
  console.log(event.target.value);
  
}


useEffect(()=> {
  dispatch(getAllTrainingCards(deckId)) 
}, [])

const cards = useAppSelector((state) => state.trainingCards.cards);

cards.map((card) => [...cards, card.currentDifficulty])
const card = cards[cardIndex];

console.log(card);
 
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
            { cardIndex < cards.length -1 && currentDifficulty > 0 &&
            <button className="block bg-cyan-500 w-24 p-4 ml-10 rounded text-white m-2" 
            onClick={handleNextCard}>
           Next
            </button>
            }
            { cardIndex === cards.length -1 && 
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