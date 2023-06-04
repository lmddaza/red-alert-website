import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-wrapper">
        <h2>View Previous Advisories:</h2>
        <br></br>
        <Calendar />
      </div>
    </div>
  );
};

export default CalendarComponent;
