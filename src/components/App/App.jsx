import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import People from "../People/People";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";

import CalendarComponent from "../Calendar/Calendar";

function App() {
  const [page, setPage] = useState("landing");
  const [modal, setModal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState(new Date());

  return (
    <div className="page__content">
      <Header />
      <Routes>
        <Route path="/" element={<CalendarComponent onChange={setDate} />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
      <Cards />
      <People />
      <Footer />
    </div>
  );
}
export default App;
