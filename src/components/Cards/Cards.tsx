import paper_plane from "../../assets/paper_plane_black.svg";
import { FaPencilAlt } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
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
<<<<<<< HEAD
        <div className="cards__save-btn">
          <button className="cards__button-save">
=======
        <div>
          <button className="cards__button-save" onClick={handleClick}>
>>>>>>> f0d3833c28a4811533aeef1af3f485160c95fa2f
            <img
              src={paper_plane}
              alt="Paper Plane Icon"
              className="cards__button-calendar"
            />
            Open
          </button>
        </div>
      </div>
    </li>
  );
}

export default Cards;
