function ButtonsGroup({ buttons }) {
  return (
    <div className="flex justify-center space-x-2">
      {buttons.map((button, index) => (
        <button
          key={index}
          type={button.type}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-1F3D75"
          onClick={button.onClick}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
}

export default ButtonsGroup;
