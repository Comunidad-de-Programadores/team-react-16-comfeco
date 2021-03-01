import React from "react";
import style from "../../assets/style/Main.module.scss";
import "./ForgotPass.scss";
import Error from "../../components/Error/Error";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import HeaderRecover from "../../components/HeaderRecover/HeaderRecover";
import Footer from "../../components/Footer/Footer";
// import { Redirect } from "react-router-dom";

const ForgotPass = () => {
  const firebase = useFirebaseApp();
  var email;
  const handleChange = (e) => {
    email = e.target.value;
  };
  let errors = {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email != null) {
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(function () {
          // Email sent.
          console.log("Correo enviado");
        })
        .catch(function (error) {
          // An error happened.
          errors.email = "Correo no valido";
          console.log(error);
        });
    } else {
      console.log("Correo invalido");
    }
  };

  return (
    <>
      <HeaderRecover />
      <div className="container--forgot">
        <h1 className={style.title}>Restablecer Contraseña</h1>
        <form action="" className={`${style.Form}`}>
          <div className={style.inputField}>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Correo electronico"
              className={style.input}
              onChange={handleChange}
            />
            <Error>{errors.email}</Error>
          </div>
          <button
            className={`${style.btn} ${style.Solid}`}
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPass;
