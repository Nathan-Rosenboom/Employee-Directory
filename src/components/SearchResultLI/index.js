import React, { useContext } from "react";
import ArticleContext from "../../pages/Search/ArticleContext.js"
import "./style.css";

function SearchResults() {
  const {title, url} = useContext(ArticleContext);
  return (
    <ul className="list-group search-results">
      <li className="list-group-item">
        <h2>{title}</h2>
        <a href={url}>{url}</a>
      </li>
    </ul>
  );
}

export default SearchResults;
