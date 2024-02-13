import Modal from "react-modal";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleModal } from "../../store/actions/modal";


interface ModalContainerProps {
  children: React.ReactNode;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0 , 0, 0, 0.5)",
  },
};

function ModalContainer({children}: ModalContainerProps) {

  const dispatch = useAppDispatch();
  const modalIsOpen = useAppSelector((state) => state.modal.modalIsOpen);
  const handleToggleClick = () => {
    dispatch(toggleModal())
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleToggleClick}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex items-center justify-center pb-2 mb-2">
          <h1 className="font-bold text-2xl">Création de compte</h1>
        </div>
        <button
          className="absolute top-0 right-1 text-gray-500"
          onClick={handleToggleClick}
        >
          X
        </button>
        <form className="flex flex-col items-center space-y-4">
        {children}
        <div className="flex space-x-4">
          <button className="flex bg-red-500 p-2 rounded-md text-white hover:bg-red-700">
            Annuler
          </button>
          <button className="flex bg-green-500 p-2 rounded-md text-white hover:bg-green-700">
            Confirmer
          </button>
        </div>
        </form>
      </Modal>
    </div>
  );
}

export default ModalContainer;
