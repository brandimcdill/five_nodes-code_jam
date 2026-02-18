import "./Header.css";
import paper_plane_black from "../../assets/paper_plane_black.svg";
import NavBar from "../NavBar/NavBar";
function Header() {
  return (
    <div className="header">
      <div className="header__container">
       <img src={paper_plane_black} alt="Paper plane logo" className="header__logo" /> 
       <h1 className="header__title">Paper Thoughts</h1>
      </div>
      <NavBar />
      <div className="header__description-container">
      <p className="header__description-desktop"> Capture your thought. Turn them into something meaningful.</p>
      <p className="header__description-mobile">
        Monthly memories for the people you care about
      </p>
      </div>
    </div>
  );
}
export default Header;
