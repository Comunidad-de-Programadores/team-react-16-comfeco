import React from "react";
import { Link } from 'react-router-dom'
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="/icons/logo.svg" alt="logo" draggable="false"/>
      </Link>

    </header>
  );
};

export default Header;
