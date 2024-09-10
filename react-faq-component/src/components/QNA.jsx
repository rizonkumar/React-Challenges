import React from "react";

const QNA = ({ qna, showAns, handleQna }) => {
  return (
    <div className="qna">
      <div className="question" onClick={handleQna}>
        {qna.question}
        <span className="toggle-btn">{showAns ? "−" : "+"}</span>
      </div>
      <div className={`answer ${showAns ? "show" : ""}`}>{qna.answer}</div>
    </div>
  );
};

export default QNA;
