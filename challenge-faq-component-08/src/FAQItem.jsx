import React, { useEffect, useState } from "react";
import "./App.css";

const FAQItem = ({ faq, index, isExpanded, onItemClick }) => {
  const handleClick = () => {
    onItemClick(index);
  };

  return (
    <div className="faq-box">
      <div className="que" onClick={handleClick}>
        <button>{isExpanded ? "-" : "+"}</button>
        <div>{faq.question}</div>
      </div>
      {isExpanded && <div className="ans">{faq.answer}</div>}
    </div>
  );
};

export default FAQItem;
