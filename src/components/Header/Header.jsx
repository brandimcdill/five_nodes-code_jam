import React from "react";
import "./Header.css";
import airplane from "../../assets/airplane.svg";
function Header() {
  return (
    <div class="header">
      <div class="header__container">
        <h1 class="header__title">Paper Thoughts</h1>
        <img src={airplane} alt="Paper plane logo" class="header__logo" />
      </div>
      <p class="header__description">
        Weekly memories for the people you care about.
      </p>
    </div>
  );
}
export default Header;
