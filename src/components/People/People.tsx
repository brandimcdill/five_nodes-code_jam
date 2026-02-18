import Cards from "../Cards/Cards";
import { people } from "../../Utils/Constants/people";

function People({ handleCardClick, selectedCard, handleDeleteConnectionClick, onClick }) {
  return (
    <div className="people">
      <ul className="cards__list">
        {people.map((person) => (
          <Cards
            key={person.id}
            card={person}
            onclick={onClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default People;
