import React from "react";

function SearchBar({ onSearch }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by cuisine..."
        onChange={(e) => onSearch(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />
    </div>
  );
}

export default SearchBar;
