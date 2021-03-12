import React from "react";
import { Link } from "react-router-dom";
import SearchGroup from "../../SearchGroup/SearchGroup";
import GroupsList from "../../GroupsList/GroupsList";

const Groups = ({ image, name, id, info, glass }) => {
  return (
    <>
      <div className="container--group">
        <div className="group--mygroup"></div>
        <div className="group--list">
          <div className="list--search">
            <div className="search--filter">
              <select name="Tecnología" id="">
                <option value="1">TypeScript</option>
                <option value="2">React Js</option>
                <option value="3">Angular</option>
                <option value="4">JavaScript</option>
                <option value="5">Android</option>
              </select>
            </div>
            <div className="search--browser">
              <input type="text" placeholder="Buscar grupo..." />
            </div>
          </div>
          <div className="list--groups">
            <ul>
              <li>polacos</li>
              <li>polacos</li>
              <li>polacos</li>
              <li>polacos</li>
              <li>polacos</li>
            </ul>
          </div>
        </div>
      </div>
      <p>Groups</p>
      <SearchGroup />
      <GroupsList />
      <article className="cocktail">
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <div className="cocktail-footer">
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{info}</p>
          <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
            details
          </Link>
        </div>
      </article>
    </>
  );
};

export default Groups;
