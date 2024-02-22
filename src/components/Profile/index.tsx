import { useState } from "react";
import DeleteAccountModal from "./DeleteAccountModal";

function Profile() {
  // We use useState to turn the <p> into <input> after clicking the Edit button, which will allow the user to edit.
  const [isEditing, setIsEditing] = useState(false);

  const [isDeleteAccountModal, setIsDeleteAccountModal] = useState(false);

  function handleDeleteClick() {
    setIsDeleteAccountModal(true);
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const user = {
    name: "Angèle",
    email: "angèle@gmail.com",
    password: "*******",
  };

  return (
    <div className="mx-auto bg-F5E9E0 p-10 rounded-xl flex flex-col items-center">
      <div>
        <p className="text-2xl font-bold mb-4 text-1F3D75">Page de Profile</p>
      </div>
      <p className="text-lg font-semibold text-1F3D75">Username:</p>
      <div>
        {isEditing ? (
          <input type="text" className="border rounded px-2 py-1 w-full" />
        ) : (
          <p>{user.name}</p>
        )}
      </div>
      <p className="text-lg font-semibold text-1F3D75">Email:</p>
      <div>
        {isEditing ? (
          <input type="email" className="border rounded px-2 py-1 w-full" />
        ) : (
          <p>{user.email}</p>
        )}
      </div>
      <p className="text-lg font-semibold text-1F3D75">Mot de passe:</p>
      <div>
        {isEditing ? (
          <input
            type="password"
            className="border rounded px-2 py-1 w-full mb-2"
          />
        ) : (
          <p>{user.password}</p>
        )}
      </div>
      <p className="text-lg font-semibold text-1F3D75">Nouveau mot de passe:</p>
      <div>
        {isEditing ? (
          <input
            type="password"
            className="border rounded px-2 py-1 w-full mb-2"
          />
        ) : (
          <p>{user.password}</p>
        )}
      </div>
      <div className="flex space-x-4">
        {isEditing && (
          <button
            type="submit"
            className="px-4 py-2 bg-1F3D75 text-F5E9E0 rounded transition-colors duration-300 ease-in-out hover:bg-F5E9E0 hover:text-1F3D75"
          >
            Save
          </button>
        )}
        {isEditing && (
          <button
            onClick={handleCancelClick}
            className="px-4 py-2 bg-1F3D75 text-F5E9E0 rounded transition-colors duration-300 ease-in-out hover:bg-F5E9E0 hover:text-1F3D75"
          >
            Cancel
          </button>
        )}
        <button
          onClick={handleEditClick}
          className="px-4 py-2 bg-1F3D75 text-F5E9E0 rounded transition-colors duration-300 ease-in-out hover:bg-F5E9E0 hover:text-1F3D75"
        >
          Edit
        </button>
        <button
          onClick={handleDeleteClick}
          className="px-4 py-2 bg-1F3D75 text-F5E9E0 rounded transition-colors duration-300 ease-in-out hover:bg-F5E9E0 hover:text-1F3D75"
        >
          Delete my account
        </button>
      </div>
      <DeleteAccountModal
        isOpen={isDeleteAccountModal}
        onClose={() => {
          setIsDeleteAccountModal(false);
        }}
      />
    </div>
  );
}

export default Profile;
