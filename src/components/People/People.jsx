import add_icon from "../../assets/add_icon.png";
import Cards from "../Cards/Cards";
import "./People.css";
function People() {
  return (
    <section className="your-people">
      <h2 className="your-people__title">Your Connections</h2>
      <button type="button" class="your-people__add-btn">
        <img src={add_icon} alt="" class="your-people__add-btn-image" />
      </button>
      <ul className="your-people__list">
        <Cards />
      </ul>
    </section>
  );
}
export default People;
