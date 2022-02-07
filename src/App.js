import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: false,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
        hours: 4,
        time: 5,
        timeslots: Number,
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
        hours: 4,
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
        hours: 4,
    },
];

function App() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "",hours: "" });
    const [allEvents, setAllEvents] = useState(events);
let hours 
    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
        hours = allEvents.hours*100
    }

    return (
        <div className="App">
          <div>
            <h2 style={{ textAlign:"right", marginRight: "150px"}}>Price: $100 {hours} </h2>
          </div>
            <h1>Calendar</h1>
            <h2>Add New Booking:</h2>
            <h3>Hourly Price:   </h3>
            <ul>
              <li>$100 on Weekdays</li>
              <li>$150 on Weekends</li>
            </ul>
            <div>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <label for="hours">Number of hours</label>
  <select name="hours" id="hours" onChange={(e) => setNewEvent({ ...newEvent, hours: e.target.value })}>
    <option value={newEvent.hours}>1</option>
    <option value={newEvent.hours}>2</option>
    <option value={newEvent.hours}>3</option>
    <option value={newEvent.hours}>4</option>
  </select>
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Booking
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} timeslots="timeslots" />
        </div>
    );
}

// two dropdowns
// start time and
// num of Hours

// Price component with
// $100 on Weekdays
// $150 on Weekends


export default App;