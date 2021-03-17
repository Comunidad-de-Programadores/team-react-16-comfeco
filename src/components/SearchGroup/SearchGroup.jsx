import React from "react";
import { useGlobalContext } from "../../context/contextTabGroups";

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
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchGroup}
          />
        </div>
      </form>
    </section>
  );
}
