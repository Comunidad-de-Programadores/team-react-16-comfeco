import React, { useState, useRef, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import AuthContext from "../../hooks/AuthContext";
import { types } from "../../types";
import { links } from "../../routes/RoutesHome";
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

  const { user, dispatch } = useContext(AuthContext);
  var data;
  if (user.username != null) {
    data = user.username;
  } else {
    data = user.email;
  }
  const history = useHistory();

  const logout = () => {
    dispatch({
      type: types.logout,
    });
    history.push("/");
  };
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
          <div className="header__menu">
            <div className="header__menu--profile">
              <div className="avatar">
                <img
                  src="https://source.unsplash.com/random/40x40"
                  alt="Foto de Perfil"
                />
              </div>
              <p>{data}</p>
              <p>
                <TiArrowSortedDown />
              </p>
            </div>
            <ul>
              <li>
                <a href="/">Mi Perfil</a>
              </li>
              <li>
                <a onClick={() => logout()}>Cerrar sesión</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
