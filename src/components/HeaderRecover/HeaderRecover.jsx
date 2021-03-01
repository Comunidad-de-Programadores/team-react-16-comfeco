import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import "./HeaderRecover.scss";

const HeaderRecover = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" draggable="false" className="logo" />
      </Link>
      <Link to="/">
        <input type="submit" value="Iniciar Sesión" className="btn" />
      </Link>
    </header>
  );
};

export default HeaderRecover;
