import React from "react";
import SearchGlass from "../assets/search-glass.png";

import "./SearchBox.css";
const SearchBox: React.FunctionComponent<any> = (props) => {
  return (
    <div className="search-box">
      <input type={"text"} placeholder={"Search by food name"}></input>
      <img className="search-icon" src={SearchGlass} alt="search" />
    </div>
  );
};
export { SearchBox };
