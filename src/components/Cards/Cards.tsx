import paper_plane from "../../assets/paper_plane.svg";
import { FaPencilAlt } from "react-icons/fa";
import "./Cards.css";
function Cards({ onclick, card, handleCardClick, handleEditConnectionClick }) {
  const { name, relationship, avatar } = card;
  const handleClick = () => {
    handleCardClick(card);
  };

  return (
    <li className="card">
      <div className="cards__face">
        <button
          type="button"
          className="cards__button-edit"
          onClick={handleEditConnectionClick}
        >
          <FaPencilAlt className="cards__button-pencil-icon" />
        </button>
        <div className="card__info">
          <img src={card.avatar} alt={card.name} className="avatar" />
          <div className="card__name-container">
            <h2 className="card__name">{card.name}</h2>
            <p className="card__relationship">{card.relationship}</p>
          </div>
        </div>
        <div>
          <button>
            <img
              src={paper_plane}
              alt="Paper Plane Icon"
              className="cards__button-calendar"
              onClick={handleCardClick}
            />
            Open
          </button>
        </div>
      </div>
    </li>
  );
}

export default Cards;
