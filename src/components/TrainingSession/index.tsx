import { Link } from "react-router-dom";

const trainingDeck = [
  {
    card_id: 1,
    front: "Pomme",
    back: "Apple",
    difficulty: 0
  },
  {
    card_id: 2,
    front: "Poire",
    back: "Pear",
    difficulty: 0
  },
  {
    card_id: 3,
    front: "Banane",
    back: "Banana",
    difficulty: 0
  },
  {
    card_id: 5,
    front: "Chien",
    back: "Dog",
    difficulty: 1
  },
  {
    card_id: 6,
    front: "Voiture",
    back: "Car",
    difficulty: 1
  },
  {
    card_id: 7,
    front: "Maison",
    back: "House",
    difficulty: 2
  },
  {
    card_id: 8,
    front: "Lune",
    back: "Moon",
    difficulty: 2
  },
  {
    card_id: 9,
    front: "Eau",
    back: "Water",
    difficulty: 4
  },
  {
    card_id: 9,
    front: "Lait",
    back: "Milk",
    difficulty: 4
  },
  {
    card_id: 10,
    front: "Temps",
    back: "Time",
    difficulty: 8
  },
  {
    card_id: 11,
    front: "Stylo",
    back: "Pen",
    difficulty: 8
  },
  {
    card_id: 12,
    front: "Livre",
    back: "Book",
    difficulty: 16
  },
  {
    card_id: 13,
    front: "Famille",
    back: "Family",
    difficulty: 16
  },
  {
    card_id: 14,
    front: "Soleil",
    back: "Sun",
    difficulty: 32
  },
  {
    card_id: 4,
    front: "Chat",
    back: "Cat",
    difficulty: 32
  }
];


function TrainingSession() {
  const deck = trainingDeck;

  console.log(deck);

  return (
    <>
    <h1 className="flex justify-center title py-2">
      Training session
    </h1>
    <div className="flex justify-center title">
      <div className="border-2 px-16 py-20 w-64 border-black rounded-md title">
        Loader / Card
      </div>
    </div>
    <div>
    <div className="flex justify-center">
      <button className="block bg-yellow-400 p-4 w-24 mr-10 rounded text-white m-2">Flip</button>
      <div className="flex justify-center w-96 static">
        <button className="block bg-green-500 p-4 w-24 rounded text-white m-2">Easy</button>
        <button className="bg-blue-500 p-4 w-24 rounded text-white m-2">Medium</button>
        <button className="bg-red-500 p-4 w-24 rounded text-white m-2">Hard</button>
      </div> 
        <button className="block bg-cyan-500 w-24 rounded text-white m-2 ml-10">
          Next
        </button>
      <div className="flex justify-end m-2 ml-10">
      <Link to="/">
        <button className="block bg-black p-4 rounded text-white font-semibold" >End session</button>
      </Link>
      </div>
      </div>
    </div>
    </>
  )
}

export default TrainingSession;