import { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

function CalendarComponent() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth'
      }}
      height="auto"
      events={[
        { title: 'Event 1', date: '2026-02-18' },
        { title: 'Event 2', date: '2026-02-20' }
      ]}
    />
  )
}

export default CalendarComponent
// AI Help ends
