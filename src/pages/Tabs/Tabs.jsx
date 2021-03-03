import React, { useState } from "react";
import "./Tabs.scss";
import { containers } from "../../database/dataTabs";
import LayoutHome from "../../components/LayoutHome/LayoutHome";

const Tabs = () => {
  const [contenedor, setPeople] = useState(containers);
  const [value, setValue] = useState(0);

  const { title, tab } = containers[value];
  return (
    <>
      <LayoutHome>
        <section className="container--tabs">
          <div className="tabs">
            {/* tabs btn */}
            <div className="tabs--btn">
              {contenedor.map((item, index) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => setValue(index)}
                    className={`btn-tab ${index === value && "btn-active"}`}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
            {/* tabs info */}
            <article className="tabs--info">
              <h3>{title}</h3>
              {tab}
            </article>
          </div>
        </section>
      </LayoutHome>
    </>
  );
};

export default Tabs;
