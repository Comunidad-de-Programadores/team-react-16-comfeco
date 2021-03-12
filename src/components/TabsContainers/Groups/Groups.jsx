import React from "react";
import GroupsContainer from "../../GroupsContainer/GroupsContainer";
import SearchGroup from "../../SearchGroup/SearchGroup";
import "./Groups.scss";

export default function Groups() {
  return (
    <>
      <div className="container--group">
        <div className="group--mygroup">
          <p>polacos</p>
        </div>
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
              <SearchGroup />
            </div>
          </div>
          <div className="list--groups">
            <GroupsContainer />
          </div>
        </div>
      </div>
    </>
  );
}
