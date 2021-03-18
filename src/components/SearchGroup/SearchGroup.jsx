import React from "react";
import { useGlobalContext } from "../../context/contextTabGroups";
import "./SearchGroup.scss";

export default function SearchGroup() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchGroup() {
    setSearchTerm(`?q=${searchValue.current.value}`);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Busca tu grupo</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchGroup}
          />
        </div>
      </form>
    </>
  );
}
