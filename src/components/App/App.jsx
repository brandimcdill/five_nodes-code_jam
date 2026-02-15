import { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import People from "../People/People";
import Footer from "../Footer/Footer";

import CalendarComponent from "../Calendar/Calendar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="page__content">
        <Routes>
            <Route path="/" element={<CalendarComponent onChange={setDate}/>} />
        </Routes>
    </div>
  )
}