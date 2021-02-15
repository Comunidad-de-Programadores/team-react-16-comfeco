import React from "react";
import { Link } from "react-router-dom";
import "./FormLogin.scss";

const FormLogin = () => {
  return (
    <>
      <div className="container">
        <form className="formulario--login">
          <input type="text" placeholder="Usuario"></input>
          <input type="password" placeholder="Contraseña"></input>
          <Link to="/" className="forgot">
            <p>¿Olvidaste tu contraseña?</p>
          </Link>
          <button>Login</button>
        </form>
        <div></div>
      </div>
    </>
  );
};

export default FormLogin;
