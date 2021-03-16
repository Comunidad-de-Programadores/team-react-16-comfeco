import React from "react";

import { Link } from "react-router-dom";
import "./GroupsList.scss";

const GroupsList = ({ image, name, id, info, etiq }) => {
  return (
    <>
      <article className="groups">
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <div className="groups-footer">
          <h3>{name}</h3>
          <h4>{etiq}</h4>
          <p>{info}</p>
          <Link to={``} className="btn btn-primary btn-details">
            Unirme
          </Link>
        </div>
      </article>
    </>
  );
};

export default GroupsList;
