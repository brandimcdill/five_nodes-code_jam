import paper_plane from "../../assets/paper_plane.svg";
import {people} from "../../Utils/Constants/people";
function Cards({ onclick, card, people}) {
  const handleCardClick = () => {
    onclick(card);
  };
  let nameValue;
  let relationshipValue;
  let connections= people.find((person) => person.id === card?.id);
  (connections ? people.map((person) => {
    person.id ? nameValue =person.name : nameValue = "No Name";
    person.relationship ? relationshipValue = person.relationship : relationshipValue = "No Relationship";
    person.avatar ? person.avatar : "No Avatar"; 
  }) : nameValue = "No Name", relationshipValue = "No Relationship");
  return (
    <li className="card">
      <div className="cards__information">
        <button type="button" className="cards__button-pencil">
          <img src="" alt="" className="cards__button-pencil-image" />
        </button>
        <img src="" alt="" className="avatar" />
        <h2 className="card__name">{nameValue}</h2>
        <h3 className="card__relationship">{relationshipValue}</h3>
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
