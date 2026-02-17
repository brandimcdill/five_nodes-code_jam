import add_icon from "../../assets/add_icon.png";
import Cards from "../Cards/Cards";
import "./People.css";

function People({ handleCardClick, selectedCard, people}) {
  return (
    <section className="your-people">
      <h2 className="your-people__title">Your Connections</h2>
      <button type="button" className="your-people__add-btn">
        <img src={add_icon} alt="" className="your-people__add-btn-image" />
      </button>
      <ul className="your-people__list">
        <Cards handleCardClick={handleCardClick} card={selectedCard} people={people}/>
      </ul>
    </section>
  );
}
export default People;
