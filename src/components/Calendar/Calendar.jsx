import { useState } from "react";
import Calendar from "react-calendar";

function CalendarComponent(onChange) {
  const [date, setDate] = useState(new Date());
  const config = {
    onChange: setDate,
    viewType: "week",
    value: date,
  };
  return (
    <div className="calendar-container">
      <Calendar onChange={setDate} value={date} />
    </div>
  );
}
export default CalendarComponent;