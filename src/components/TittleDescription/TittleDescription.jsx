import React from "react";
import "./TittleDescription.scss";

const TittleDescription = () => {
  return (
    <>
      <div className="contenedorBanner">
        <div className="contenedorLogo"></div>
        <div className="contenedorInfo">
          <h1 className="bannerTittle">Community Fest and Code</h1>
          <p className="bannerDesc">
            Participa del festival de codigo en hispanoamérica hecho por
            desarrolladores, para desarrolladores
          </p>
        </div>
      </div>
    </>
  );
};

export default TittleDescription;
