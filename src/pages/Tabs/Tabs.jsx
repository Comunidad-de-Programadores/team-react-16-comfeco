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
        <section className="section">
          <div className="jobs-center">
            {/* btn container */}
            <div className="btn-container">
              {contenedor.map((item, index) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => setValue(index)}
                    className={`job-btn ${index === value && "active-btn"}`}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
            {/* job info */}
            <article className="job-info">
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
