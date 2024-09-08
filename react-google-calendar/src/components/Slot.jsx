import React from "react";

export const Slot = () => {
  const slots = Array.from({ length: 24 }, (_, index) => index);

  return (
    <>
      {slots.map((slot) => {
        return (
          <div className="slot" key={slot}>
            {slot}:00
          </div>
        );
      })}
    </>
  );
};
