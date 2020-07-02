import React, { useContext } from "react";
import "./style.css";

function SearchResults() {
  return (
    <ul className="list-group search-results">
      <li className="list-group-item">
        props.firstName
        props.lastName
        props.email
        props.phoneNumber
        props.dob
        props.profileImg
      </li>
    </ul>
  );
}

export default SearchResults;
