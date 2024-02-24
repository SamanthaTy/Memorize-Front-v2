import { Formik, Form } from "formik";
import { useAppDispatch } from "../../../hooks/redux";
import Input from "./Input";
import {
  updatePassword,
  updateUser,
} from "../../../store/actions/user/updateUser";
import { validationSchema, initialValues } from "./validation";

function EditAccountForm({ toggleEdit }) {
  const dispatch = useAppDispatch();

  const onFormikSubmit = async (values, { setSubmitting }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const isPasswordModified = values.password !== "";

    const areOtherFieldsModified =
      values.username !== "" || values.email !== "";

    if (isPasswordModified) {
      dispatch(
        updatePassword({
          password: values.password,
          newPassword: values.newPassword,
        })
      );
    }

    if (areOtherFieldsModified) {
      dispatch(updateUser({ username: values.username, email: values.email }));
    }

    setSubmitting(false);
    toggleEdit();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onFormikSubmit}
    >
      <Form>
        <Input name="username" label="Your username" type="text" />
        <Input name="email" label="Your email" type="email" />
        <Input name="password" label="Your current password" type="password" />
        <Input name="newPassword" label="Your new password" type="password" />
        <button type="submit">Save</button>
        <button type="button" onClick={toggleEdit}>
          Cancel
        </button>
      </Form>
    </Formik>
  );
}

export default EditAccountForm;
