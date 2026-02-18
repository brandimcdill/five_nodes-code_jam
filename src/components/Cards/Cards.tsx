import "./Cards.css";
import paper_plane from "../../assets/paper_plane.svg";
import "./Cards.css";
function Cards({ onclick, card }) {
  const handleCardClick = () => {
    onclick(card);
  };

  return (
    <li className="card">
      <div className="cards__information">
        <button type="button" className="cards__button-pencil">
          <img src="" alt="" className="cards__button-pencil-image" />
        </button>
        <img src={card.avatar} alt={card.name} className="avatar" />
        <h2 className="card__name">{card.name}</h2>
        <h3 className="card__relationship">{card.relationship}</h3>
        <button
          type="button"
          className="cards__button-calendar"
          onClick={handleCardClick}
        >
          <img
            src={paper_plane}
            alt="Paper Plane Icon"
            className="cards__button-calendar"
          />
          Tap to Open
        </button>
      </div>
    </li>
  );
}

export default Cards;
