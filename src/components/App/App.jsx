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
} from "../../Utils/API";

import CalendarComponent from "../Calendar/Calendar";

function App() {
  const [page, setPage] = useState("landing");
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState(new Date());
  const [people, setPeople] = useState([]);

  const handleCardClick = (card) => {
    setActiveModal(card);
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

export default App;
