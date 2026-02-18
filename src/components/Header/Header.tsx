import "./Header.css";
import paper_plane from "../../assets/paper_plane.svg";
import NavBar from "../NavBar/NavBar";
function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__title">Paper Thoughts</h1>
        <img src={paper_plane} alt="Paper plane logo" className="header__logo" />
      </div>
      <NavBar />
      <p className="header__description">
        Monthly memories for the people you care about
      </p>
    </div>
  );
}
export default Header;
