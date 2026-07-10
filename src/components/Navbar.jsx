import React from "react";
import SearchBar from "./SearchBar";
import "./styles/Navbar.css";

const Navbar = ({
  darkMode,
  setDarkMode,
  onSearch,
  onReset,
}) => {
  return (
    <nav className="navbar">
      {/* Logo - Click to Reset Home */}
      <div className="logo" onClick={onReset}>
        🍽️ RecipeHub
      </div>

      {/* Search Bar */}
      <SearchBar onSearch={onSearch} />

      {/* Dark / Light Mode */}
      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
};

export default Navbar;