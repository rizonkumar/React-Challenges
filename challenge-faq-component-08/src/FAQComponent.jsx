import React, { useState } from "react";
import FAQItem from "./FAQItem";
import { faqs } from "./FAQconsts";

const FAQComponent = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleItemClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  return (
    <>
      {faqs.map((faq, index) => {
        return (
          <FAQItem
            faq={faq}
            index={index}
            isExpanded={index === expandedIndex}
            onItemClick={handleItemClick}
          />
        );
      })}
    </>
  );
};

export default FAQComponent;
