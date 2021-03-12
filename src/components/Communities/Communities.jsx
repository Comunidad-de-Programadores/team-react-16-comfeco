import React, { useState } from "react";
import "./Communities.scss";
import data from "../../database/dataCommunity";

const Communities = () => {
  const [people] = useState(data);
  return (
    <>
      <div className="communities--title">
        <h3>Comunidades</h3>
      </div>
      {people.map((person) => {
        const { id, name, url, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>
                <a href={url} target="blank">
                  Unirse
                </a>
              </p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Communities;
