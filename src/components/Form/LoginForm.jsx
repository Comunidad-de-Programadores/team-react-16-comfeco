import { useContext } from "react";
import { AuthContext } from "../../hooks/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { useFormValidation } from "../../hooks/useFormValidation";
import { loginValidation } from "../../rules/loginValidate";
import { Error } from "../Error/Error";
import { PasswordIcon } from "../Icons/PasswordIcon";
import style from "./AuthForm.module.css";
import { types } from "../../types";
import { UserIcon } from "../Icons/UserIcon";

const INITIAL_STATE = {
  username: "",
  password: "",
};
export const LoginForm = () => {
  const {
    data,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormValidation(INITIAL_STATE, loginValidation, userAuth);

  const { dispatch } = useContext(AuthContext);

  const history = useHistory();

  const { username, password } = data;

  function userAuth() {
    try {
      dispatch({
        type: types.login,
        payload: {
          username,
          password,
        },
      });
      console.log(data);
      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  }

  const FormInput = [
    {
      type: "username",
      name: "username",
      placeholder: "Username",
      icon: <UserIcon />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
      onChange: handleChange,
      onBlur: handleBlur,
      value: username,
      error: errors.username && <Error>{errors.username}</Error>,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      icon: <PasswordIcon />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
      onChange: handleChange,
      onBlur: handleBlur,
      value: password,
      error: errors.password && <Error>{errors.password}</Error>,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className={`${style.Form} ${style.signInForm}`}
      noValidate
    >
      <h2 className={style.title}>Sign in</h2>
      {FormInput.map((item, i) => {
        return (
          <span key={i}>
            <div className={item.classContainer}>
              {item.icon}
              <input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                className={item.classInput}
                value={item.value}
                onChange={item.onChange}
                onBlur={item.onBlur}
              />
            </div>
            {item.error}
          </span>
        );
      })}
      <Link to="./recuperar-password">
        ¿Olvidate la Contraseña? click <span>Aquí</span>
      </Link>
      <input
        type="submit"
        value="Login"
        className={`${style.btn} ${style.Solid}`}
      />
    </form>
  );
};
