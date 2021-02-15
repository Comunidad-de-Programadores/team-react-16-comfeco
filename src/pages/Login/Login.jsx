import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { IconLoginImg } from "../../assets/icon/IconLoginImg";
import { RegisterIcon } from "../../assets/icon/RegisterIcon";
import FormLogin from "../../components/FormLogin/FormLogin";
// import FormRegister from "../../components/FormLogin/FormRegister";
import style from "./Login.scss";

const Login = () => {
  const [isChange, setChage] = useState("false");

  const handleToggle = () => {
    setChage(!isChange);
  };
  return (
    <>
      <div
        className={`${style.container} ${
          isChange ? `${style.signUpMode}` : ""
        }`}
      >
        <div className={style.formsContainer}>
          <div className={style.signinSignup}>
            {/** FORM-LOGIN */}
            <FormLogin />

            {/** FORM-REGISTER */}
            {/* <FormRegister /> */}
          </div>
        </div>
        {/** PANEL-AZUL */}
        <div className={style.panelsContainer}>
          <div className={`${style.panel} ${style.leftPanel}`}>
            <div className={style.content}>
              <h3 className={style.h3}>¿Aún no te has unido?</h3>
              <button
                className={`${style.btn} ${style.transparent}`}
                id="sign-up-btn"
                onClick={() => handleToggle()}
              >
                Registrate
              </button>
            </div>
            <div className={style.image}>
              <IconLoginImg />
            </div>
          </div>
          <div className={`${style.panel} ${style.rightPanel}`}>
            <div className={style.content}>
              <h3 className={style.h3}>¿Ya eres miembro?</h3>
              <button
                className={`${style.btn} ${style.transparent}`}
                id="sign-in-btn"
                onClick={() => handleToggle()}
              >
                Ingresa aquí
              </button>
            </div>
            <div className={style.image}>
              <RegisterIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
