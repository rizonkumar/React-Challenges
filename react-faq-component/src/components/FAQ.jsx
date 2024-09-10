import React, { useState } from "react";
import QNA from "./QNA";
import "./FAQ.css";

const FAQ = ({ data }) => {
  const [showIndex, setShowIndex] = useState(-1);

  const handleQna = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="faq-container">
      {data.faqs.map((qna, index) => (
        <QNA
          qna={qna}
          key={index}
          showAns={index === showIndex}
          handleQna={() => handleQna(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
