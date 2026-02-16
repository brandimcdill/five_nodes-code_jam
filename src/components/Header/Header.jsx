import React from "react";
import "./Header.css";
 function Header() {
  return (
    <div class="header">
      <div class="header__container">
        <img src="" alt="Paper plane logo" class="header__logo" />
        <h1 class="header__title">Paper Thoughts</h1>
      </div>
      <p class="header__description">
        Weekly memories for the people you care about.
      </p>
    </div>
  );
}
export default Header;