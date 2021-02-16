import React from "react";

import { IconLoginImg } from "../../assets/icon/IconLoginImg";
import FormRegister from "../../components/FormRegister/FormRegister";
import "./Register.scss";

const Register = () => {
  return (
    <>
      <div className="container change">
        <FormRegister />
        <div className="container--login">
          <h3>¡Inicia sesión aquí!</h3>
          <button className="button--white btn-wr">Ingresa</button>
          <div className="icon--register">
            <IconLoginImg />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
