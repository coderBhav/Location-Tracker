import React, { useState } from "react";

const Header=()=> {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };
  return (
    <header className="app-header">
      <div className="heading">
        <h1 className="logo"><i className="material-icons">location_on</i>Location Tracker</h1>
        <button className="toggle-btn" onClick={toggleTheme}>
          <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
        </button>
      </div>
      <p>Track your live location and share it easily!</p>
    </header>
  );
};

export default Header;