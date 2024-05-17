import { NavLink } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import PageTitle from "../components/PageTitle/PageTitle";

export default function Login() {
  return (
    <div>
      <PageTitle>Please log in</PageTitle>
      <LoginForm />

      <p
        style={{
          textAlign: "center",
          fontFamily: "Montseratt, sans-serif",
          fontSize: "18px",
          color: "black",
          letterSpacing: "0.03em",
          marginTop: "10px",
        }}
      >
        or <NavLink to="/register">register</NavLink>
      </p>
    </div>
  );
}