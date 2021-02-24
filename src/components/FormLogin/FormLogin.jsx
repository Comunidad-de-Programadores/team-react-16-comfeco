import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../hooks/AuthContext";
import useFormValidation from "../../hooks/useFormValidation";
import loginValidation from "../../rules/loginValidate";
import Error from "../Error/Error";
import PasswordIcon from "../../assets/icon/PasswordIcon";
import style from "../../assets/style/Main.module.scss";
import { types } from "../../types";
import EmailIcon from "../../assets/icon/EmailIcon";

const INITIAL_STATE = {
  email: "",
  password: "",
};
const FormLogin = () => {
  const {
    data,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormValidation(INITIAL_STATE, loginValidation, userAuth);

  const { dispatch } = useContext(AuthContext);

  const history = useHistory();

  const { email, password } = data;

  function userAuth() {
    try {
      dispatch({
        type: types.login,
        payload: {
          email,
          password,
        },
      });
      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  }

  const FormInput = [
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      icon: <EmailIcon />,
      classContainer: `${style.inputField}`,
      classInput: `${style.input}`,
      onChange: handleChange,
      onBlur: handleBlur,
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
      <h2 className={style.title}>Iniciar Sesión</h2>
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
      <Link to="./recuperar-contraseña">
        <span>¿Olvidate la Contraseña?</span>
      </Link>
      <input
        type="submit"
        value="Iniciar"
        className={`${style.btn} ${style.Solid}`}
      />
    </form>
  );
};

export default FormLogin;
