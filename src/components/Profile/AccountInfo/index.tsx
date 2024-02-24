import { useState } from "react";
import DeleteAccountModal from "../DeleteAccountModal";

function AccountInfo({ toggleEdit, loggedUser }) {
  const [isDeleteAccountModal, setIsDeleteAccountModal] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleteAccountModal(true);
  };

  return (
    <section>
      <p>Username:</p>
      <p>{loggedUser.username}</p>
      <p>Email:</p>
      <p>{loggedUser.email}</p>
      <p>Mot de passe:</p>
      <p>******</p>
      <p>Nouveau mot de passe:</p>
      <p>******</p>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={handleDeleteClick}>Delete my account</button>
      <DeleteAccountModal
        isOpen={isDeleteAccountModal}
        onClose={() => {
          setIsDeleteAccountModal(false);
        }}
      />
    </section>
  );
}

export default AccountInfo;
