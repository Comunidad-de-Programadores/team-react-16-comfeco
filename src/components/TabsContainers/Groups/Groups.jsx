import React from "react";

const Groups = () => {
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
    </>
  );
};

export default Groups;
