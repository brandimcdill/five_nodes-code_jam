import { useState } from "react";
import Calendar from "react-calendar";

function CalendarComponent({ onChange, activeModal, selectedCard, value, handleNewMemory }) {
  const [date, setDate] = useState(value);
  const config = useState({
    onChange: setDate,
    viewType: "week",
    value: date,
  });
  return (
    <div className="calendar-container">
      
    </div>
  );
}
export default CalendarComponent;
