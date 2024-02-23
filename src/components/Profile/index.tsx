import { useState, useEffect } from "react";
import { getUser } from "../../store/actions/user/getUser.ts";
import { updateUser } from "../../store/actions/user/updateUser.ts";
import { useDispatch } from "react-redux";
import DeleteAccountModal from "./DeleteAccountModal";

function Profile() {
  // We use useState to turn the <p> into <input> after clicking the Edit button, which will allow the user to edit.
  const [isEditing, setIsEditing] = useState(false);

  const [isDeleteAccountModal, setIsDeleteAccountModal] = useState(false);

  const [user, setUser] = useState({ username: "", email: "" });

  const [updatedUser, setUpdatedUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const userId = localStorage.getItem("id");

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await dispatch(getUser(userId));
        setUser({ ...res.payload });
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [dispatch]);

  const handleDeleteClick = () => {
    setIsDeleteAccountModal(true);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    setUpdatedUser({
      ...updatedUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSaveClick = (event) => {
    event.preventDefault();
    setIsEditing(false);
    dispatch(updateUser({ userId, userData: updatedUser }));
  };

  return (
    <div className="mx-auto bg-F5E9E0 p-10 rounded-xl flex flex-col items-center">
      <div>
        <p className="text-2xl font-bold mb-4 text-1F3D75">Page de Profil</p>
      </div>
      {isEditing ? (
        <form
          className="mx-auto bg-F5E9E0 p-10 rounded-xl flex flex-col items-center"
          onSubmit={handleSaveClick}
        >
          <label className="text-lg font-semibold text-1F3D75">
            Username:
            <input
              type="text"
              name="username"
              value={updatedUser.username}
              onChange={handleInputChange}
              className="border rounded px-2 py-1 w-full mb-2"
            />
          </label>
          <label className="text-lg font-semibold text-1F3D75">
            Email:
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              onChange={handleInputChange}
              className="border rounded px-2 py-1 w-full mb-2"
            />
          </label>
          <label className="text-lg font-semibold text-1F3D75">
            Password:
            <input
              type="password"
              name="password"
              value={updatedUser.password}
              onChange={handleInputChange}
              className="border rounded px-2 py-1 w-full mb-2"
            />
          </label>
          <label className="text-lg font-semibold text-1F3D75">
            Confirm Password:
            <input
              type="password"
              name="passwordConfirm"
              value={updatedUser.passwordConfirm}
              onChange={handleInputChange}
              className="border rounded px-2 py-1 w-full mb-2"
            />
          </label>
          <div className="flex flex-col items-center w-full">
            <button
              type="submit"
              className="px-4 py-2 bg-1F3D75 text-F5E9E0 rounded transition-colors duration-300 ease-in-out hover:bg-F5E9E0 hover:text-1F3D75"
            >
              Save
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-1F3D75 text-F5E9E0 rounded transition-colors duration-300 ease-in-out hover:bg-F5E9E0 hover:text-1F3D75"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div>
          <p className="text-lg font-semibold text-1F3D75">Username:</p>
          <div>
            <p>{user.username}</p>
          </div>
          <p className="text-lg font-semibold text-1F3D75">Email:</p>
          <div>
            <p>{user.email}</p>
          </div>
          <p className="text-lg font-semibold text-1F3D75">Mot de passe:</p>
          <div>
            <p>******</p>
          </div>
          <p className="text-lg font-semibold text-1F3D75">
            Nouveau mot de passe:
          </p>
          <div>
            <p>******</p>
          </div>
          <div className="flex space-x-4">
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
        </div>
      )}
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
