import React from "react";
import data from "../data.json";
import Accordian from "./Accordian";

const Faq = () => {
  return (
    <div>
      <h1>FAQ's</h1>
      {data.faqs.map((obj, index) => {
        return <Accordian qna={obj} key={index}/>;
      })}
    </div>
  );
};

export default Faq;
