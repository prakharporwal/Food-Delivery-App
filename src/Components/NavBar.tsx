import { useState } from "react";
import { RCButton, RCSecondaryButton } from "../Components/Button";
import UserAvatar from "../assets/man.png";
import { MdMenu } from "react-icons/md";

import "./NavBar.css";

const NavBar: React.FunctionComponent<any> = () => {
  let [activeClass, setActiveClass] = useState(false);

  return (
    <>
      {/* <span className="work-in-progress">Work In Progress</span> */}
      <nav className={`navbar ${activeClass ? "active" : ""}`}>
        {/* <IconButton> */}
        <button
          className="hamburger-menu-toggle"
          onClick={() => {
            setActiveClass(!activeClass);
          }}
        >
          {/* <img
            className="sidebar-icon"
            src={HamBurgerIcon}
            alt="Side Bar"
          ></img> */}
          <MdMenu />
        </button>
        {/* </IconButton> */}

        {/* <span>Dashboard</span> */}

        <ul className="navbar-menu">
          <li className="nav-item">
            <RCSecondaryButton>Home</RCSecondaryButton>
          </li>
          <li className="nav-item">
            <RCSecondaryButton>Dashboard</RCSecondaryButton>
          </li>
          <li className="nav-item">
            <RCSecondaryButton>Orders</RCSecondaryButton>
          </li>
          <li className="nav-item">
            <RCSecondaryButton>Settings</RCSecondaryButton>
          </li>
          <RCButton className="offers-button" title="Learn More" />
        </ul>

        <div className="user-info">
          <div>
            <img className="user-avatar" src={UserAvatar} alt="Avatar" />
          </div>
          <div className="username">
            <span>Prakhar Porwal</span>
            <span className="designation">Premium</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export { NavBar };
