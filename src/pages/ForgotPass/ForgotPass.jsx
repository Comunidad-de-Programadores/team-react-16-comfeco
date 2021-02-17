import React from "react";
import "./ForgotPass.scss";
import style from "../../assets/style/Main.module.scss";

const ForgotPass = () => {
  return (
    <>
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
            />
          </div>
          <button className={`${style.btn} ${style.Solid}`}>Enviar</button>
        </form>
      </div>
    </>
  );
};

export default ForgotPass;
