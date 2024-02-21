import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getAllCards } from "../../../store/actions/cards/allcards";
import Card from "./Card";

const cardList = ({deckId}) => {


const dispatch = useAppDispatch();
const allCards = useAppSelector((state) => state.cards.cards);
console.log(allCards);



useEffect(() => {
  dispatch(getAllCards(deckId))
}, [])


// const filteredCards = allCards.filter((card) => card.deck_id === deckId)

  return (
    <>
    {allCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </>
  )

};

export default cardList;