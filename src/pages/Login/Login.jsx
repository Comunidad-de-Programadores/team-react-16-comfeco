import React from "react";
import { RegisterIcon } from "../../assets/icon/RegisterIcon";

import FormLogin from "../../components/FormLogin/FormLogin";
import "./Login.scss";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="container--register">
          <h3>¿Nuevo en Comfeco?</h3>
          <button className="button--white btn-wr">Registrate</button>
          <div className="icon--register">
            <RegisterIcon />
          </div>
        </div>
        <FormLogin />
      </div>
    </>
  );
};

export default Login;
