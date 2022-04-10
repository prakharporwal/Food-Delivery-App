import React from "react";
import { IconButton } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import "./SideBar.css";

const SideBar: React.FunctionComponent<any> = (props) => {
  return (
    <div className="sidebar">
      <ul className="nav-list">
        <li>
          <span className="nav-item">
            <IconButton alt="wallet">
              <FontAwesomeIcon icon={faHome} />
            </IconButton>
          </span>
        </li>
        <li>
          <span className="nav-item">
            <IconButton alt="wallet"></IconButton>
          </span>
        </li>
        <li>
          <span className="nav-item">
            <IconButton alt="wallet"></IconButton>
          </span>
        </li>
        <li>
          <span className="nav-item">
            <IconButton alt="wallet"></IconButton>
          </span>
        </li>
        <li>
          <span className="nav-item">
            <IconButton alt="wallet"></IconButton>
          </span>
        </li>
      </ul>
    </div>
  );
};

export { SideBar };
