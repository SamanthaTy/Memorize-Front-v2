import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { getAllTrainingCards } from "../../store/actions/trainingSession/getTrainingCards";
import { useEffect } from "react";



function TrainingSession() {

  const dispatch = useAppDispatch()

  const { deckId } = useParams()

  useEffect(()=> {
    dispatch(getAllTrainingCards(Number(deckId)))
  }, [])
  
  
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

      <div className="flex justify-end w-96">
        <button className="block bg-yellow-400 p-4 w-24 mr-10 rounded text-white m-2">
          Flip
        </button>
      </div>

      <div className="flex justify-center w-96 static">
        <button className="block bg-green-500 p-4 w-24 rounded text-white m-2">Easy</button>
        <button className="bg-blue-500 p-4 w-24 rounded text-white m-2">Medium</button>
        <button className="bg-red-500 p-4 w-24 rounded text-white m-2">Hard</button>
      </div>

      <div className="flex w-32">
        <div className="flex justify-start">
          <button className="block bg-cyan-500 w-24 p-4 ml-10 rounded text-white m-2">
            Next
          </button>
        </div>
      </div>
        <div className="flex justify-end w-64">
          <Link to="/" className="flex justify-end">
            <button className="block bg-black p-4 rounded text-white m-2 font-semibold" >End session</button>
          </Link>
        </div>
        
      </div>



    </div>
    </>
  )
}

export default TrainingSession;