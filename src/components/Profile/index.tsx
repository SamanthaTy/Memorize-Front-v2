import { useState } from "react";

function Profile() {

// We use useState to turn the <p> into <input> after clicking the Edit button, which will allow the user to edit.
  const [isEditing, setIsEditing] = useState(false);

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
    <div className="mx-auto bg-slate-400 p-10 rounded-xl">
      <div>
        <p className="text-2xl font-bold mb-4">Page de Profile</p>
      </div>
      <p className="text-lg font-semibold">Username:</p>
      <div>
        {isEditing ? (
          <input type="text" className="border rounded px-2 py-1 w-full" />
        ) : (
          <p>{user.name}</p>
        )}
      </div>
      <p className="text-lg font-semibold">Email:</p>
      <div>
        {isEditing ? (
          <input type="email" className="border rounded px-2 py-1 w-full" />
        ) : (
          <p>{user.email}</p>
        )}
      </div>
      <p className="text-lg font-semibold">Mot de passe:</p>
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
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        )}
        {isEditing && (
          <button
            onClick={handleCancelClick}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
        <button
          onClick={handleEditClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        >
          Edit
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Delete my account
        </button>
      </div>
    </div>
  );
}

export default Profile;
