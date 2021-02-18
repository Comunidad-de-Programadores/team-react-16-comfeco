import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" draggable="false" className="logo" />
      </Link>
    </header>
  );
};

export default Header;
