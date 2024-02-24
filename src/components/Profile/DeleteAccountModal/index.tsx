import ModalContainer, { ModalProps } from "../../ModalContainer";
import { useAppDispatch } from "../../../hooks/redux";
import { deleteUser } from "../../../store/actions/user/deleteUser";

const DeleteAccountModal = ({ isOpen, onClose }: ModalProps) => {
  const dispatch = useAppDispatch();

  const deleteUserAccount = (e) => {
    e.preventDefault();
    dispatch(deleteUser());
    onClose();
  };

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      modalTitle="Supprimer votre compte"
      handleSubmitType={deleteUserAccount}
    >
      <p>Êtes vous sûr de vouloir supprimer votre compte</p>
    </ModalContainer>
  );
};

export default DeleteAccountModal;
