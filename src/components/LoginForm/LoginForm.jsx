import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";
import toast from "react-hot-toast";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    if (!values.email.trim() || !values.password.trim()) {
      return toast.error("Please fill in all the fields!", { duration: 4000 });
    }

    dispatch(login(values))
      .unwrap()
      .then(() => {
        toast.success("You have successfully logged in!", {
          duration: 4000,
        });
      })
      .catch(() => {
        toast.error(
          "Something went wrong. Please try to input other details!",
          {
            duration: 4000,
          }
        );
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Email
          <Field className={styles.inputElement} type="email" name="email" />
        </label>
        <label className={styles.label}>
          Password
          <Field
            className={styles.inputElement}
            type="password"
            name="password"
          />
        </label>
        <button className={styles.buttonElement} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}