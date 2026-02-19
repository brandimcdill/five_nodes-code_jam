import Cards from "../Cards/Cards";
import "./People.css";
import { people } from "../../Utils/Constants/people";
import { FaEllipsisH } from "react-icons/fa";

function People({
  handleDeleteConnectionClick,
  onClick,
  handleEditConnectionClick,
  handleNewMemoryClick,
  handleEditPersonClick,
  handleAddNewConnection,
  handleCreatePersonClick,
}) {
  return (
    <div className="people">
      <div className="people__title-group">
      <div className="people__title-section">
      <h2 className="people__title">Your Connections</h2>
      <p className="people__subtitle">Manage your connections with the people in your life</p>
      </div>
      <button className="people__new-memory" onClick={handleCreatePersonClick}>+ Add New Person</button>
      </div>
      <ul className="cards__list">
        {people.map((person) => (
          <Cards
            key={person.id}
            card={person}
            onclick={onClick}
            handleDeleteConnectionClick={handleDeleteConnectionClick}
            handleEditConnectionClick={handleEditConnectionClick}
            handleEditPersonClick={handleEditPersonClick}
          />
        ))}
      </ul>
      <div className="people__new-memory-container">
        <button className="people__new-memory" onClick={handleNewMemoryClick}>+ Create New Memory</button>
      </div>
    </div>
  );
}

export default People;
