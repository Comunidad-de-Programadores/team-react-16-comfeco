import React from "react";
import { useGlobalContext } from "../../context/contextTabGroups";

export default function Filters() {
  const { etiquetas, setSearchTerm } = useGlobalContext();

  function searchGroup(e) {
    setSearchTerm(`?tag_like=${e.target.value}`);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="btn-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <select id="" value={setSearchTerm} onChange={searchGroup}>
          {etiquetas.map((item, index) => {
            return (
              <option className="filter-btn" key={index} value={item.tag}>
                {item.tag}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
}
