import React from "react";
import { Slot } from "./Slot";
import Events from "./Events";
import events from "../constants/event.json";

const DayView = () => {
  return (
    <div className="calendar">
      <div className="line"></div>
      <Slot />
      <Events events={events} />
    </div>
  );
};

export default DayView;
