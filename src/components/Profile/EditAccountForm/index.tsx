function EditAccountForm({ toggleEdit }: { toggleEdit: () => void }) {
  return (
    <form>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <label>
        Confirm Password:
        <input type="password" name="passwordConfirm" />
      </label>
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={toggleEdit}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditAccountForm;
