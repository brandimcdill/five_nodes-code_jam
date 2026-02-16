import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import People from "../People/People";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import {
  getPerson,
  createPerson,
  getPeople,
  getCalendar,
  deletePerson,
  createMemory,
} from "../../Utils/API";
import { signIn, signout, signUp, setToken, getToken } from "../../Utils/auth";
import { AuthProvider } from "../../Utils/Contexts/AuthContext";
import { UserContext } from "../../Utils/Contexts/UserContext";

import CalendarComponent from "../Calendar/Calendar";

export default function App() {
  const [page, setPage] = useState("landing");
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState(new Date());
  const [people, setPeople] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setActiveModal(card);
  };
  const handleAddConnectionClick = () => {
    setActiveModal("addConnection");
  };
  const handleDeleteConnectionClick = (card) => {
    deletePerson(card.id)
      .then(() => {
        setPeople((prevPeople) =>
          prevPeople.filter((person) => person.id !== card.id),
        );
      })
      .catch((error) => {
        console.error("Error deleting person:", error);
      });
  };
  const handleNewMemory = (memoryData) => {
    createMemory(
      memoryData.title,
      memoryData.note,
      memoryData.date,
      memoryData.personId,
      memoryData.link,
      memoryData.imageUrl,
    )
      .then((newMemory) => {
        // Update the state to include the new memory
        setPeople((prevPeople) => {
          return prevPeople.map((person) => {
            if (person.id === memoryData.personId) {
              return {
                ...person,
                memories: [...person.memories, newMemory],
              };
            }
            return person;
          });
        });
      })
      .catch((error) => {
        console.error("Error creating memory:", error);
      });
  };
<<<<<<< HEAD

=======
>>>>>>> 9e05bf0a63f029edcad5cd4196140c0df9f5167f
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route
            path="/"
            element={
              <CalendarComponent
                onChange={setDate}
                activeModal={activeModal}
                selectedCard={selectedCard}
                value={date}
                handleNewMemory={handleNewMemory}
              />
            }
          />
        </Routes>
        <Cards
          handleDeleteConnectionClick={handleDeleteConnectionClick}
          onClick={handleCardClick}
          card={selectedCard}
        />
        <People
          handleDeleteConnectionClick={handleDeleteConnectionClick}
          selectedCard={selectedCard}
        />
        <Footer />
      </div>
    </div>
  );
}
