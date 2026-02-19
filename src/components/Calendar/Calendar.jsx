import "./Calendar.css";

// AI Help

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div class="react-calendar__container">
      <Calendar onChange={setDate} value={date} />
    </div>
  );
}

export default MyCalendar;
// AI Help ends
