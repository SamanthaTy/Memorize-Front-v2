import { Formik, Form } from "formik";
import ButtonsGroup from "../../Profile/EditAccountForm/ButtonsGroup";
import Input from "../../Profile/EditAccountForm/Input";
import { createUser } from "../../../store/actions/user/createUser";
import { useAppDispatch } from "../../../hooks/redux";
import { initialValues, validationSchema } from "./validation";
import ModalContainer from "../../ModalContainer";
import { toast } from "react-toastify";

function SignUpFormModal({ isOpen, onClose }: ModalProps) {
  const dispatch = useAppDispatch();

  const handleFormikSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(createUser(values)).unwrap();
      setSubmitting(false);  
      onClose(); 
      toast.success("Votre compte a bien été créé, vous pouvez vous connecter.");
    } catch (error) {
      toast.error("Une erreur est survenue, veuillez ré-essayer.");
    }
  };

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      modalTitle="Créer un compte"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormikSubmit}
      >
        <Form className="flex flex-col items-center justify-center text-center">
          <div className="space-y-1">
            <Input name="username" label="Identifiant" type="text" />
            <Input name="email" label="Email" type="email" />
            <Input name="password" label="Mot de passe" type="password" />
          </div>
          <div className="mt-4">
            <ButtonsGroup
              buttons={[
                { text: "Save", type: "submit" },
                { text: "Cancel", type: "button", onClick: onClose },
              ]}
            />
          </div>
        </Form>
      </Formik>
    </ModalContainer>
  );
}
export default SignUpFormModal;
