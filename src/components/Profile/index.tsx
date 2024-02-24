import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import EditAccountForm from "./EditAccountForm";
import AccountInfo from "./AccountInfo";
import { getUser } from "../../store/actions/user/getUser";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useAppDispatch();

  const toggleEdit = () => setIsEditing(!isEditing);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const loggedUser = useAppSelector((state) => state.login);

  return (
    <section>
      <h1>Page de Profil</h1>
      {isEditing ? (
        <EditAccountForm toggleEdit={toggleEdit} />
      ) : (
        <AccountInfo toggleEdit={toggleEdit} loggedUser={loggedUser} />
      )}
    </section>
  );
}

export default Profile;
