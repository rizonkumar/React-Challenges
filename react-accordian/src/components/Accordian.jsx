import React, { useState } from "react";

const Accordian = ({ qna }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="accordian">
      <h3>
        {qna.question} <span onClick={() => setShow(!show)}>{show ? "-" : "+"}</span>
      </h3>
      {show ? <p>{qna.answer}</p> : ""}
    </div>
  );
};

export default Accordian;
