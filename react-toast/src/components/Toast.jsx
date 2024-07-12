import React, { useRef, useState } from "react";

const Toast = () => {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef({});

  console.log("toasts", toasts);
  console.log("timer ref", timersRef);

  const handleClose = (id) => {

    clearTimeout(timersRef.current[id]);

    delete timersRef.current[id];

    setToasts((prevToasts) => {
      const filteredArr = prevToasts.filter((toast) => {
        return toast.id !== id;
      });
      return filteredArr;
    });
  };

  const handleAdd = (message, type) => {
    const id = new Date().getTime();
    const newToasts = [...toasts, { id, message, type }];
    setToasts(newToasts);
    timersRef.current[id] = setTimeout(() => handleClose(id), 5000);
  };
  return (
    <div className="container">
      <div className="toast-container">
        {toasts.map(({ id, message, type }) => {
          return (
            <div key={id} className={`toast ${type}`}>
              {message} <span onClick={() => handleClose(id)}>X</span>
            </div>
          );
        })}
      </div>
      <div className="button-container">
        <button onClick={() => handleAdd("Success", "success")}>
          Success Toast
        </button>
        <button onClick={() => handleAdd("Info", "info")}>Info Toast</button>
        <button onClick={() => handleAdd("Warning", "warning")}>
          Warning Toast
        </button>
        <button onClick={() => handleAdd("Error", "error")}>Error Toast</button>
      </div>
    </div>
  );
};

export default Toast;
