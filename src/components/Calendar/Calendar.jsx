import { useState } from "react";
import Calendar from "react-calendar";

function CalendarComponent({ onChange, activeModal, selectedCard }) {
  const [date, setDate] = useState(new Date());
  const config = useState({
    onChange: setDate,
    viewType: "week",
    value: date,
  });
  return (
    <div className="calendar-container">
      <Calendar
        {...config}
        onChange={onChange}
        value={date}
        activeModal={activeModal}
        selectedCard={selectedCard}
      />
    </div>
  );
}
export default CalendarComponent;
