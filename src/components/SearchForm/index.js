import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="filter">Search:</label>
        <input
          type="text"
          className="form-control"
          onChange={props.Userfilter}
          placeholder="Enter employee details to filter"
        />
      </div>
    </form>
  );
}

export default SearchForm;
