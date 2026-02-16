function Cards() {
  const handleCardClick = () => {
    onclick(item);
  };
  let nameValue;
  let relationshipValue;
  return (
    <li className="card">
      <div className="cards__information">
        <button type="button" className="cards__button-pencil">
          <img src="" alt="" class="cards__button-pencil-image" />
        </button>
        <img src="" alt="" className="avatar" />
        <h2 className="card__name">{nameValue}</h2>
        <h3 className="card__relationship">{relationshipValue}</h3>
        <button type="button" className="cards__button">
          <img src="" alt="" className="cards__button-plane-image" />
          Tap to open
        </button>
      </div>{" "}
    </li>
  );
}
export default Cards;
