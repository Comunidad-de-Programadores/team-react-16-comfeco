import { useState } from "react";
import RegisterImg from "../../assets/img/pc.png";
import LoginImg from "../../assets/img/people.png";
import style from "../../assets/style/Main.module.scss";
import FormLogin from "../../components/FormLogin/FormLogin";
import FormRegister from "../../components/FormRegister/FormRegister";

const AuthForm = () => {
  const [isChange, setChage] = useState("false");

  const handleToggle = () => {
    setChage(!isChange);
  };
  return (
    <div
      className={`${style.container} ${isChange ? `${style.signUpMode}` : ""}`}
    >
      <div className={style.formsContainer}>
        <div className={style.signinSignup}>
          <FormLogin />

          <FormRegister />
        </div>
      </div>
      <div className={style.panelsContainer}>
        <div className={`${style.panel} ${style.leftPanel}`}>
          <div className={style.content}>
            <h3 className={style.h3}>¿Nuevo en Comfeco?</h3>
            <button
              className={`${style.btn} ${style.transparent}`}
              id="sign-up-btn"
              onClick={() => handleToggle()}
            >
              Regístrate
            </button>
          </div>
          <div className={style.image}>
            <img src={LoginImg} alt="pc-registro" />
          </div>
        </div>
        <div className={`${style.panel} ${style.rightPanel}`}>
          <div className={style.content}>
            <h3 className={style.h3}>¡Inicia sesión aquí!</h3>
            <button
              className={`${style.btn} ${style.transparent}`}
              id="sign-in-btn"
              onClick={() => handleToggle()}
            >
              Iniciar Sesión
            </button>
          </div>
          <div className={style.image}>
            <img src={RegisterImg} alt="pc-registro" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
