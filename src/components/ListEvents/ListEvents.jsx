import React, { useState } from "react";
import "./ListEvents.scss";
import data from "../../database/dataEvents";

const ListEvents = () => {
  const [eventos, setEventos] = useState(data);

  return (
    <>
      <div className="events--title">
        <h3>Eventos</h3>
      </div>
      {eventos.map((event) => {
        const { id, name, url, image } = event;
        return (
          <article key={id} className="event">
            <h4>{name}</h4>
            <img src={image} alt={name} />
            <p>
              <a href={url} target="blank">
                Más Información
              </a>
            </p>
          </article>
        );
      })}
    </>
  );
};

export default ListEvents;
