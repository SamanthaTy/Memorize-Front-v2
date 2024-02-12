import { useState } from "react";

function Profile() {
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
    <div className="mx-auto">
      <div>
        <p>Page de Profile</p>
      </div>
      <p>Username:</p>
      <div>
        {isEditing ? (
          <input type="text" className="border rounded px-2 py-1 w-full" />
        ) : (
          <p>{user.name}</p>
        )}
      </div>
      <p>Email:</p>
      <div>
        {isEditing ? (
          <input type="email" className="border rounded px-2 py-1 w-full" />
        ) : (
          <p>{user.email}</p>
        )}
      </div>
      <p>Mot de passe:</p>
      <div>
        {isEditing ? (
          <input type="password" className="border rounded px-2 py-1 w-full mb-2" />
        ) : (
          <p>{user.password}</p>
        )}
      </div>
      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          onClick={handleCancelClick}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>

        <button
          onClick={handleEditClick}
          className="bg-blue-500 text-white px-4 py-2 rounded"
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
