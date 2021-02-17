import React from "react";
import { FaCopyright } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      Copyright&nbsp;
      <FaCopyright color="gray" />
      &nbsp;2021 Todos los derechos reservados.
    </footer>
  );
};

export default Footer;
