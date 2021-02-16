import { useState } from "react";
import RegisterImg from "../../assets/img/pc.png";
import LoginImg from "../../assets/img/people.png";
import style from "../Form/AuthForm.module.css";
import { LoginForm } from "../Form/LoginForm";
import { RegisterForm } from "../Form/RegisterForm";

export const AuthForm = () => {
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
          <LoginForm />

          <RegisterForm />
        </div>
      </div>
      <div className={style.panelsContainer}>
        <div className={`${style.panel} ${style.leftPanel}`}>
          <div className={style.content}>
            <h3 className={style.h3}>New to Cofemco?</h3>
            <button
              className={`${style.btn} ${style.transparent}`}
              id="sign-up-btn"
              onClick={() => handleToggle()}
            >
              Sign up
            </button>
          </div>
          <div className={style.image}>
            <img src={LoginImg} alt="pc-registro" />
          </div>
        </div>
        <div className={`${style.panel} ${style.rightPanel}`}>
          <div className={style.content}>
            <h3 className={style.h3}>Go to login!</h3>
            <button
              className={`${style.btn} ${style.transparent}`}
              id="sign-in-btn"
              onClick={() => handleToggle()}
            >
              Sign in
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
