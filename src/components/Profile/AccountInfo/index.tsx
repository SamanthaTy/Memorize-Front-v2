import { useState } from "react";
import DeleteAccountModal from "../DeleteAccountModal";
import ButtonsGroup from "../EditAccountForm/ButtonsGroup";

function AccountInfo({ toggleEdit, loggedUser }) {
  const [isDeleteAccountModal, setIsDeleteAccountModal] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleteAccountModal(true);
  };

  return (
    <section className="flex flex-col text-center space-y-2">
      <div>
        <h3 className="text-lg font-semibold text-black-600 mb-1">
          Votre identifiant:
        </h3>
        <p className="text-gray-800">{loggedUser.username}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-black-600 mb-1">
          Votre email:
        </h3>
        <p className="text-gray-800">{loggedUser.email}</p>
      </div>
      <ButtonsGroup
        buttons={[
          { text: "Edit", onClick: toggleEdit },
          { text: "Delete my account", onClick: handleDeleteClick },
        ]}
      />
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
