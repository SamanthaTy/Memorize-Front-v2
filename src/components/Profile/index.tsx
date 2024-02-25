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

  const loggedUser = useAppSelector((state) => state.user);

  return (
    <section className="flex flex-col bg-slate-400 p-10 rounded-xl mx-auto text-center items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Page de Profil</h1>
      {isEditing ? (
        <EditAccountForm toggleEdit={toggleEdit} />
      ) : (
        <AccountInfo toggleEdit={toggleEdit} loggedUser={loggedUser} />
      )}
    </section>
  );
}

export default Profile;
