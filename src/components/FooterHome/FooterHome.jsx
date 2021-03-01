import React from "react";
import {
  FaCopyright,
  FaDiscord,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./FooterHome.scss";

const FooterHome = () => {
  return (
    <footer>
      <div className="footer--left">
        <p>
          Copyright&nbsp;
          <FaCopyright color="gray" />
          &nbsp;2021 Todos los derechos reservados.
        </p>
      </div>
      <div className="footer--right">
        <ul className="social-icons">
          <li>
            <p>Siguenos en nuestras redes</p>
          </li>
          <li>
            <a
              href="https://www.facebook.com/groups/2637132626546045"
              target="blank"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://discord.com/invite/5Bb5yvzNPr" target="blank">
              <FaDiscord />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UC0oi8uH1vxDcyt7b_3iByew"
              target="blank"
            >
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/comfeco" target="blank">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/comfeco2021/"
              target="blank"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterHome;
