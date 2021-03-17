import React from "react";
import { useGlobalContext } from "../../context/contextTabGroups";

export default function Filters() {
  const { etiquetas, setSearchTerm } = useGlobalContext();
  let allEtiquetas = [...new Set(etiquetas.map((item) => item.tag))];

  function searchGroup(e) {
    setSearchTerm(`?tag_like=${e.target.value}`);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="btn-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <select onChange={searchGroup}>
          <option className="filter-btn" value="">
            Todos
          </option>
          {allEtiquetas.map((tag, index) => {
            return (
              <option className="filter-btn" key={index} value={tag}>
                {tag}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
}
