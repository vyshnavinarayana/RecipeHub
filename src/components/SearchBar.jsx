import React, { useState, useEffect } from "react";
import "./styles/SearchBar.css";

const SearchBar = ({ onSearch, reset }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (reset) {
      setQuery("");
    }
  }, [reset]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="🔍 Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;