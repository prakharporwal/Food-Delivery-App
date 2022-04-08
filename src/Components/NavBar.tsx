import { IconButton, RCButton, RCSecondaryButton } from "../Components/Button";
import UserAvatar from "../assets/man.png";
import HamBurgerIcon from "../assets/hamburger.png";

import "./NavBar.css";
const NavBar: React.FunctionComponent<any> = () => {
  return (
    <>
      <span className="work-in-progress">Work In Progress</span>
      <nav className="navbar">
        <IconButton>
          <img
            className="sidebar-icon"
            src={HamBurgerIcon}
            alt="Side Bar"
          ></img>
        </IconButton>

        <span>Dashboard</span>

        <ul className="navbar-menu">
          <li>
            <RCSecondaryButton>Home</RCSecondaryButton>
          </li>
          <li>
            <RCSecondaryButton>Dashboard</RCSecondaryButton>
          </li>
          <li>
            <RCSecondaryButton>Orders</RCSecondaryButton>
          </li>
          <li>
            <RCSecondaryButton>Settings</RCSecondaryButton>
          </li>
          <RCButton className="offers-button" title="Learn More" />
        </ul>

        <div>
          <img className="user-avatar" src={UserAvatar} alt="Avatar" />
        </div>

        <div className="user-info">
          <span className="username">Prakhar Porwal</span>
          <span className="designation">Super Foodie</span>
        </div>
      </nav>
    </>
  );
};

export { NavBar };
