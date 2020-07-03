import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          onChange={props.userFilter}
          placeholder="Search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
