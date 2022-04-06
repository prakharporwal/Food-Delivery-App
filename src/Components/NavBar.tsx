import { IconButton, RCButton, RCButtonSecondary } from "../Components/Button";
import GIF from "../assets/icons8-hamburger-menu.gif";
import "./NavBar.css";
const NavBar: React.FunctionComponent<any> = () => {
  return (
    <>
      <nav className="navbar">
        <IconButton></IconButton>
        <span>Dashboard</span>
        <ul>
          <li>
            <RCButtonSecondary>Home</RCButtonSecondary>
          </li>
          <li>
            <RCButtonSecondary>Dashboard</RCButtonSecondary>
          </li>
          <li>
            <RCButtonSecondary>Orders</RCButtonSecondary>
          </li>
          <li>
            <RCButtonSecondary>Settings</RCButtonSecondary>
          </li>
        </ul>
        <div className="user-info">
          <div>UserName</div>
          <div>Designation</div>
        </div>
        <img src={GIF} alt="image" width="30px" />

        <RCButton title="Offers">Offers</RCButton>
      </nav>
    </>
  );
};

export { NavBar };
