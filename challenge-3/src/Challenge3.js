import React, { useState, useEffect } from "react";

const Challenge3 = () => {
  const [message, setMessage] = useState("Hello World");
  const [timerValue, setTimerValue] = useState(0);
  const [messageChanged, setMessageChanged] = useState(false);

  useEffect(() => {
    const interval = 1000; // Set the interval for updating the timer in milliseconds

    const timer = setTimeout(() => {
      setMessage("GoodBye!");
      setMessageChanged(true);
    }, 5000);

    const timerInterval = setInterval(() => {
      if (!messageChanged) {
        setTimerValue((prevValue) => prevValue + interval / 1000);
      }
    }, interval);

    return () => {
      clearTimeout(timer);
      clearInterval(timerInterval);
    };
  }, [messageChanged]);

  return (
    <div>
      <p>Message: {message}</p>
      <p>Timer: {timerValue.toFixed(2)} seconds</p>
    </div>
  );
};

export default Challenge3;
