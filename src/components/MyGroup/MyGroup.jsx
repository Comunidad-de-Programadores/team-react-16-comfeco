import React from "react";
import { Link } from "react-router-dom";
import data from "../../database/dataMyGroup";
import "./MyGroup.scss";

const MyGroup = () => {
  return (
    <>
      <div className="container--mygroup">
        <div className="mygroup--header">
          <p>Mi grupo</p>
          <Link to={"#"}>Ir a grupo</Link>
        </div>
        <div className="mygroup--title">
          <p>Team Polacos</p>
          <img src="https://source.unsplash.com/random/40x40" alt="mygroup" />
        </div>
        <div className="mygroup--members">
          {data.map((item, index) => {
            return (
              <div className="members--item" key={index}>
                <img src={item.url} alt={item.name} />
                <div className="item--descrip">
                  <p>{item.name}</p>
                  <p>{item.level}</p>
                </div>
                <span>{item.member}</span>
              </div>
            );
          })}
        </div>
        <div className="mygroup--footer">
          <button>Abandonar</button>
          <button>Ir al chat</button>
        </div>
      </div>
    </>
  );
};

export default MyGroup;
