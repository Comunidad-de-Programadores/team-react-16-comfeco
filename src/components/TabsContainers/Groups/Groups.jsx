import React, { useState } from "react";
import GroupsContainer from "../../GroupsContainer/GroupsContainer";
import SearchGroup from "../../SearchGroup/SearchGroup";
import { useGlobalContext } from "../../../context/contextTabGroups";
import Filters from "../../Filters/Filters";
import "./Groups.scss";

export default function Groups() {
  const { groups } = useGlobalContext();
  const allTag = ["all", ...new Set(groups.map((item) => item.tag))];
  const [menuItems, setMenuItems] = useState(groups);
  const [tag, setTag] = useState(allTag);

  const filterItems = (tag) => {
    if (tag === "all") {
      setMenuItems(groups);
      return;
    }
    const newItems = groups.filter((item) => item.tag === tag);
    setMenuItems(newItems);
  };
  return (
    <>
      <div className="container--group">
        <div className="group--mygroup">
          <p>polacos</p>
        </div>
        <div className="group--list">
          <div className="list--search">
            <div className="search--filter">
              <Filters categories={tag} filterItems={filterItems} />
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
