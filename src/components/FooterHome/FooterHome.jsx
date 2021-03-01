import React from "react";
import {
  FaCopyright,
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./FooterHome.scss";

const FooterHome = () => {
  return (
    <footer>
      <div className="footer--left">
        Copyright&nbsp;
        <FaCopyright color="gray" />
        &nbsp;2021 Todos los derechos reservados.
      </div>
      <div className="footer--right">
        <ul className="social-icons">
          <li>
            <a href="https://www.twitter.com">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaBehance />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterHome;
