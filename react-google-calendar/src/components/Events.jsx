import React from "react";

const Events = ({ events }) => {
  return (
    <div>
      {events.map((event, index) => {
        const startHour = event.start.split(":")[0];
        const startMinute = event.start.split(":")[1];
        const endHour = event.end.split(":")[0];
        const endMinute = event.end.split(":")[1];
        // 5 is the 5 rem you gave from top
        const top = startHour * 5 + (startMinute / 60) * 5;
        const height =
          (endHour - startHour) * 5 + ((endMinute - startMinute) / 60) * 5;
        return (
          <div
            key={index}
            className="event"
            style={{ top: `${top}rem`, height: `${height}rem` }}
          >
            {event.title}
          </div>
        );
      })}
    </div>
  );
};

export default Events;
