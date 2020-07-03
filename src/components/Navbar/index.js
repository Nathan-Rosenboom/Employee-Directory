import React from "react";
import "style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1 className="header">Employee Directory</h1>
      <div>
        <h3 className="subheader">
          Search for Employees and their contact information
        </h3>
        <p className="nav-text">
          Use the search bar to look for someone specific, or click on the
          column headers to switch between ascending and descending order.
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
