import React from "react";
import "./RecoverPass.scss";
// import "../../assets/animation/input-animation.js";

const RecoverPass = () => {
  return (
    <>
      <h1>Restablecer Contraseña</h1>
      <div className="formulario">
        <form
          action=""
          className="formulario--recover"
          name="formulario--recover"
        >
          <div className="input-group">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Correo electronico"
            />
            {/* <label htmlFor="email" className="label">
              Correo electrónico
            </label> */}
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </>
  );
};

export default RecoverPass;
