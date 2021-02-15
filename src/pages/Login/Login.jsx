import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <>
      <form onSubmit="">
        <input placeholder="Usuario"></input>
        <input placeholder="Contraseña"></input>
        <Link>
          <p>¿Olvidaste tu contraseña?</p>
        </Link>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
