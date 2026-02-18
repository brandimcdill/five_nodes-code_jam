import { NavLink } from "react-router-dom";
import home_icon from "../../assets/home_icon.svg";
import acct_icon from "../../assets/acct_icon.svg";
import settings_icon from "../../assets/settings_icon.svg";

import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to="/" className="navbar__link">
          <img
            src={home_icon}
            alt="Home Icon"
            className="navbar__mobile-only-icon"
          />
          Home
        </NavLink>
        <NavLink to="/account" className="navbar__link">
          <img
            src={acct_icon}
            alt="Account Icon"
            className="navbar__mobile-only-icon"
          />
          Account
        </NavLink>
        <NavLink to="/settings" className="navbar__link">
          <img
            src={settings_icon}
            alt="Settings Icon"
            className="navbar__mobile-only-icon"
          />
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
