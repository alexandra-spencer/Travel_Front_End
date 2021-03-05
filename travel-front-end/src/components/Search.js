import React from "react";

function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Countries</label>
      <input
        type="text"
        id="search"
        placeholder="Type a country name to search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;