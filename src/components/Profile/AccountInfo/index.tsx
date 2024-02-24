function AccountInfo({ toggleEdit, loggedUser }) {
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
      <button>Delete my account</button>
    </section>
  );
}

export default AccountInfo;
