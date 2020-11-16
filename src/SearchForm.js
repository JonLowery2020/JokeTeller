import React from "react";

const SearchForm = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit();
  };
  return (
    <div className="flex-container">
      <form onSubmit={onSubmit}>
        <input
          teype="text"
          placeholder="Search for a joke..."
          onChange={(event) => props.onSearchvalueChange(event.target.value)}
        />

        <button disabled={props.isSearching}>Search</button>

        <button onClick={props.onSingleSearch} disabled={props.isSearching}>
          Im feeling funny!
        </button>
      </form>
    </div>
  );
};
export default SearchForm;
