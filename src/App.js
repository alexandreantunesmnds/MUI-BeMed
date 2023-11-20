import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';



const localizer = momentLocalizer(moment);

function App() {
  const [events, setEvents] = useState([
    {
      start: new Date(),
      end: new Date(),
      title: 'Special Event',
      color: '#2b6f69'
    }
  ]);

  const [selectedDate, setSelectedDate] = useState(null);
  const [eventName, setEventName] = useState('');

  const handleSelect = (event) => {
    setSelectedDate(event.start);
  };

  const handleAddEvent = () => {
    if (selectedDate && eventName !== '') {
      const colors = [
        '#2b6f69',
        '#159e8d',
        '#00cdb1'
      ];

      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      const newEvent = {
        start: selectedDate,
        end: selectedDate,
        title: eventName,
        color: randomColor
      };
      setEvents([...events, newEvent]);
      setEventName(''); // Clear the event name input after adding the event
    } else {
      alert('Please select a date and enter an event name.');
    }
  };

  const handleDeleteEvent = (event) => {
    const updatedEvents = events.filter((e) => e !== event);
    setEvents(updatedEvents);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>
          <MedicalInformationIcon fontSize="large" />
          Hello world!
        </h1>
        <div>
          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleAddEvent}>
            Add Event
          </Button>
        </div>
        <div style={{ height: 500, marginTop: '20px' }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={handleDeleteEvent}
            onSelectSlot={handleSelect}
            selectable
            defaultDate={new Date()}
            messages={{
              today: "Aujourd'hui",
              previous: 'Précédent',
              next: 'Suivant',
              month: 'Mois',
              week: 'Semaine',
              day: 'Jour',
              agenda: 'Agenda',
              date: 'Date',
              time: 'Heure',
              event: 'Événement',
            }}
            eventPropGetter={(event) => ({
              style: {
                backgroundColor: event.color,
              },
            })}
          />
        </div>
      </div>
      <div style={{ marginLeft: '50px' }}>
        <h2>Liste des événements</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              {event.title} - {moment(event.start).format('LLL')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
