import React from "react";
import "./Header.css";
import airplane from "../../assets/airplane.svg";
function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__title">Paper Thoughts</h1>
        <img src={airplane} alt="Paper plane logo" className="header__logo" />
      </div>
      <p className="header__description">
        Monthly memories for the people you care about
      </p>
    </div>
  );
}
export default Header;
