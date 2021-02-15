import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./FormLogin.scss";
import style from "../../pages/Login/Login.scss";
import { useFormValidation } from "../../hooks/useFormValidation";
import { loginValidation } from "../../rules/loginValidate";

const INITIAL_STATE = {
  username: "",
  password: "",
};
const FormLogin = () => {
  const {
    data,
    errors,
    submitform,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormValidation(INITIAL_STATE, loginValidation, userAuth);

  const history = useHistory();

  const { username, password } = data;

  function userAuth() {
    console.log(data);
    console.log("Login exitoso");
    history.push("/home");
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        // className={`${style.Form} ${style.signInForm}`}
        noValidate
        className="formulario--login"
      >
        <h2 className={style.title}>Iniciar Sesión</h2>
        <div className={style.inputField}>
          <input
            type="text"
            name="email"
            value={username}
            placeholder="Usuario"
            className={style.input}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
        </div>
        {/* {errors.email && <Error>{errors.email}</Error>} */}
        <div className={style.inputField}>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Contraseña"
            className={style.input}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
        </div>
        {/* {errors.password && <Error>{errors.password}</Error>} */}
        <Link to="/" className="forgot">
          <p>¿Olvidaste tu contraseña?</p>
        </Link>
        <button
          type="submit"
          value="Login"
          className={`${style.btn} ${style.Solid}`}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={submitform}
        >
          Ingresar
        </button>
      </form>
    </>
  );
};

export default FormLogin;
