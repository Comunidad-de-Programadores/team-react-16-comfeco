import React, { useState, useRef, useEffect, useContext } from "react";
import { FaBars } from "react-icons/fa";
import AuthContext from "../../hooks/AuthContext";
import { links, social } from "../../routes/RoutesHome";
import logo from "../../assets/img/logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  const { user } = useContext(AuthContext);
  var data;
  if (user.username != null) {
    data = user.username;
  } else {
    data = user.email;
  }
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="logo" alt="logo" />
            <button className="nav-toggle" onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* <ul className="social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul> */}
          <div className="perfil">
            <p>{data}</p>
            <div className="avatar">
              <img
                src="https://source.unsplash.com/random/40x40"
                alt="Foto de Perfil"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
