import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1>
        Employee Directory
      </h1>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <h3>
              Search for Employees and their contact information
            </h3>
          </li>
          <li>
            <p>Use the search bar to look for someone specific, or click on the column headers to switch between ascending and descending order.</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
