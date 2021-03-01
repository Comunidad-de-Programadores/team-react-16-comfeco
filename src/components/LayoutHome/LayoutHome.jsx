import React from "react";
import FooterHome from "../FooterHome/FooterHome";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <FooterHome />
    </>
  );
};

export default Layout;
