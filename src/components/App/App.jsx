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

  const handleCardClick = (card) => {
    setActiveModal(card);
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
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<CalendarComponent onChange={setDate} />} />
        </Routes>
        <Cards />
        <People />
        <Footer />
      </div>
    </div>
  );
}
