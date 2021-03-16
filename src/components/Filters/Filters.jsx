import React from "react";
import { useGlobalContext } from "../../context/contextTabGroups";

export default function Filters({ tag, filterItems }) {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchGroup() {
    setSearchTerm(`?tag_like=${searchValue.current.value}`);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="btn-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <select name="Tecnología" id="">
          {tag.map((tag, index) => {
            return (
              <option
                className="filter-btn"
                key={index}
                ref={searchValue}
                onChange={searchGroup}
                onClick={() => filterItems(tag)}
              >
                {tag}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
}
