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
              Search for Employees
            </h3>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
