<<<<<<< HEAD
import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';




function CalendarComponent() {
  const [options, setOptions] = useState({
  theme: 'ios',
  themeVariant: 'light'
});
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: 'Event 1', date: '2026-02-18' },
        { title: 'Event 2', date: '2026-02-20' }
      ]}
      {...options}
    />
  )
=======
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
>>>>>>> f0d3833c28a4811533aeef1af3f485160c95fa2f
}

export default MyCalendar;
// AI Help ends
