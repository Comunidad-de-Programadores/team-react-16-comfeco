import React from "react";
import { FaCopyright } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <p className="footer--center">
        Copyright&nbsp;
        <FaCopyright color="gray" />
        &nbsp;2021 Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
