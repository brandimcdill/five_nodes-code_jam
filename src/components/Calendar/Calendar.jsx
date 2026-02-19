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
}
export default CalendarComponent;
