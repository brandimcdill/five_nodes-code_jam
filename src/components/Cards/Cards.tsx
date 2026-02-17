import paper_plane from "../../assets/paper_plane.svg";
function Cards({ onclick, card, people}) {
  const handleCardClick = () => {
    onclick(card);
  };
  let nameValue;
  let relationshipValue;
  if (people && card) {
    const person = people.find((p) => p.id === card.id);
    if (person) {
      nameValue = person.name;
      relationshipValue = person.relationship;
    }
  }
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
