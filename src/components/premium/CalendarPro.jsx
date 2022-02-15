import React from "react";
import Task from '../../images/premium/grid-calendar.png';
import './CalendarPro.css';

const CalendarPro = () => {
    return (
        <div className="calendarContainer">
            <div className="calendarContainer_sCnD">
                <div className="calendarText">
                    <h1 className="calendarTitle">Find out what to do next</h1>
                    <p className="calendarSubtitle">
                        Get access to a different way of displaying the calendar.
                        Set start and end dates for desired tasks. You can also subscribe to various custom calendars.
                    </p>
                </div>
                <div className="calendarImage">
                    <img alt="calendar" src={Task} />
                </div>
            </div>
        </div>
    );
}
export default CalendarPro;