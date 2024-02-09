import { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const user = {
    name: "Angèle",
    email: "angèle@gmail.com",
    password: "*******",
  };

  return (
    <div className="mx-auto">
      <div>
        <p>Profile</p>
      </div>
      <p>Username:</p>
      <div>{isEditing ? <input type="text" /> : <p>{user.name}</p>}</div>
      <p>Email:</p>
      <div>{isEditing ? <input type="email" /> : <p>{user.email}</p>}</div>
      <p>Password:</p>
      <div>
        {isEditing ? <input type="password" /> : <p>{user.password}</p>}
      </div>
      <button type="submit">Save</button>
      <button>Cancel</button>
      <button>Delete my account</button>
      <button>Edit</button>
    </div>
  );
}

export default Profile;
