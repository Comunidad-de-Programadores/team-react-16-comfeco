import React from "react";
import "./FormRegister.scss";

const FormRegister = () => {
  return (
    <>
      <form className="formulario--register">
        <h2>Registro</h2>
        <input type="text" name="username" placeholder="Usuario"></input>
        <input
          type="text"
          name="email"
          placeholder="Correo electrónico"
        ></input>
        <input type="password" name="password" placeholder="Contraseña" />
        <input
          type="password"
          name="confirm"
          placeholder="Confirmar contraseña"
        />
        <div className="privacy">
          <input type="checkbox" className="check" />
          <p>Acepto los términos de servicio y privacidad.</p>
        </div>
        <button className="button--yellow" type="submit" value="Registrarse">
          Registrarse
        </button>
      </form>
    </>
  );
};

export default FormRegister;
