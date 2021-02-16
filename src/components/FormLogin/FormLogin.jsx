import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FormLogin.scss";

const FormLogin = (props) => {
  const [values, setValues] = useState({
    email: "",
  });
  const handleInput = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(values);
    props.history.push("/");
  };
  return (
    <>
      <form className="formulario--login" onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        <input type="text" name="email" placeholder="Usuario"></input>
        <input type="password" name="password" placeholder="Contraseña"></input>
        <Link to="/" className="forgot">
          <p>¿Olvidaste tu contraseña?</p>
        </Link>
        <Link to="/register">
          <button className="button--yellow" type="submit" value="Login">
            Ingresar
          </button>
        </Link>
      </form>
    </>
  );
};

export default FormLogin;
