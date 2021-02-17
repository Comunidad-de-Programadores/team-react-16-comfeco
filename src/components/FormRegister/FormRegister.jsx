import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserIcon from "../../assets/icon/UserIcon";
import PasswordIcon from "../../assets/icon/PasswordIcon";
import EmailIcon from "../../assets/icon/EmailIcon";
import Error from "../Error/Error";
import ToolTips from "../ToolTips/ToolTips";
import style from "../../assets/style/Main.module.scss";
import registerValidation from "../../rules/registerValidation";
import useFormValidation from "../../hooks/useFormValidation";
import AuthContext from "../../hooks/AuthContext";
import { types } from "../../types";

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  confirm: "",
};

const FormRegister = () => {
  const [accept, upAccept] = useState(false);
  const {
    data,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormValidation(INITIAL_STATE, registerValidation, userAuth);

  const history = useHistory();
  const { username, email, password, confirm } = data;

  const { dispatch } = useContext(AuthContext);

  const handleCheckbox = () => {
    upAccept(!accept);
  };
  function userAuth() {
    if (accept === false) {
      return;
    }

    dispatch({
      type: types.login,
      payload: {
        username,
        email,
        password,
        confirm,
        accept,
      },
    });
    console.log(data);
    console.log("Registro exitoso");
    history.push("/home");
  }
  const FormInput = [
    {
      type: "username",
      name: "username",
      placeholder: "Usuario",
      icon: <UserIcon />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
      value: username,
      error: errors.username && <Error>{errors.username}</Error>,
    },
    {
      type: "email",
      name: "email",
      placeholder: "Correo electrónico",
      icon: <EmailIcon />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
      value: email,
      error: errors.email && <Error>{errors.email}</Error>,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Contraseña",
      icon: <PasswordIcon />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
      value: password,
      error: errors.password && <Error>{errors.password}</Error>,
    },
    {
      type: "confirm",
      name: "confirm",
      placeholder: "Confirmar contraseña",
      icon: <PasswordIcon />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
      value: confirm,
      error: errors.confirm && <Error>{errors.confirm}</Error>,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className={`${style.Form} ${style.signUpForm}`}
      noValidate
    >
      <h2 className={style.title}>Registro</h2>
      {FormInput.map((item, i) => {
        return (
          <span key={i}>
            <div className={item.classContainer}>
              {item.icon}
              {item.type !== "password" ? (
                <input
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                  className={item.classInput}
                  value={item.value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              ) : (
                <ToolTips data="El password debe contener minimo 8 carateres">
                  <input
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    className={item.classInput}
                    value={item.value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </ToolTips>
              )}
            </div>
            {item.error}
          </span>
        );
      })}
      <span>
        <ToolTips data="Debes aceptar las politicas de privacidad para continuar">
          <input
            type="checkbox"
            name="privacity"
            className={style.checkbox}
            value={accept}
            onChange={handleCheckbox}
          />
          <label htmlFor="privacity">
            <Link to="/politicas-de-privacidad" target="_blank">
              Acepto politicas de privacidad.
            </Link>
          </label>
        </ToolTips>
      </span>
      <input type="submit" className={style.btn} value="Registrarse" />
    </form>
  );
};

export default FormRegister;
