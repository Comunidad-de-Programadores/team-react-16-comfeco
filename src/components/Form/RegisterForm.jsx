import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserIcon } from "../Icons/UserIcon";
import { PasswordIcon } from "../Icons/PasswordIcon";
import { EmailIcon } from "../Icons/EmailIcon";
import { Error } from "../Error/Error";
import { Tooltips } from "../toolTips/ToolTip";
import style from "./AuthForm.module.css";
import { registerValidation } from "../../rules/registerValidation";
import { useFormValidation } from "../../hooks/useFormValidation";
import { AuthContext } from "../../hooks/AuthContext";
import { types } from "../../types";

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  confirm: "",
};

export const RegisterForm = () => {
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
      placeholder: "Username",
      icon: <UserIcon />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
      value: username,
      error: errors.username && <Error>{errors.username}</Error>,
    },
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      icon: <EmailIcon />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
      value: email,
      error: errors.email && <Error>{errors.email}</Error>,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      icon: <PasswordIcon />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
      value: password,
      error: errors.password && <Error>{errors.password}</Error>,
    },
    {
      type: "confirm",
      name: "confirm",
      placeholder: "Confirma tu password",
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
      <h2 className={style.title}>Sign up</h2>
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
                <Tooltips data="El password debe contener minimo 8 carateres">
                  <input
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    className={item.classInput}
                    value={item.value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Tooltips>
              )}
            </div>
            {item.error}
          </span>
        );
      })}
      <span>
        <Tooltips data="Debes aceptar las politicas de privacidad para continuar">
          <input
            type="checkbox"
            name="privacity"
            className={style.checkbox}
            value={accept}
            onChange={handleCheckbox}
          />
          <label htmlFor="privacity">
            <Link to="/politicas-de-privacidad">Politicas de Privacidad</Link>
          </label>
        </Tooltips>
      </span>
      <input type="submit" className={style.btn} value="Sign up" />
    </form>
  );
};
