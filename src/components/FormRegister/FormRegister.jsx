import React from "react";
import { Link, useHistory } from "react-router-dom";
// import { Error } from "../Error/Error";
import "./FormRegister.scss";
import style from "../../pages/Login/Login.scss";
import { registerValidation } from "../../rules/registerValidation";
import { useFormValidation } from "../../hooks/useFormValidation";

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  confirm: "",
};

const FormRegister = () => {
  const {
    data,
    errors,
    submitform,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormValidation(INITIAL_STATE, registerValidation, userAuth);

  const history = useHistory();
  const { username, email, password, confirm } = data;

  function userAuth() {
    console.log(data);
    console.log("Registro exitoso");
    history.push("/home");
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        // className={`${style.Form} ${style.signUpForm}`}
        noValidate
        className="formulario--register"
      >
        <h2 className={style.title}>Registrate</h2>
        <div className={style.inputField}>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Usuario"
            className={style.input}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
        </div>
        {/* {errors.username && <Error>{errors.username}</Error>} */}
        <div className={style.inputField}>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Correo electrónico"
            className={style.input}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
        </div>
        {/* {errors.email && <Error>{errors.email}</Error>} */}
        {/* <Tooltips data="El password debe contener minimo 8 carateres"> */}
        <div className={style.inputField}>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            className={style.input}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {/* </Tooltips> */}
        <div className={style.inputField}>
          <input
            type="password"
            name="confirm"
            value={confirm}
            placeholder="Confirmar contraseña"
            className={style.input}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {/* {errors.confirm && <Error>{errors.confirm}</Error>} */}
        <input type="checkbox" />
        <p>Acepto los términos de servicio y privacidad.</p>
        <button
          type="submit"
          //   className={style.btn}
          value="Registrarse"
          disabled={submitform}
        >
          Registrarse
        </button>
      </form>
    </>
  );
};

export default FormRegister;
