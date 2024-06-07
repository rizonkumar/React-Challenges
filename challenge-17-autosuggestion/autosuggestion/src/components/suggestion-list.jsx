import React from "react";

const SuggestionList = ({
  suggestions = [],
  highlight,
  nameKey,
  onSuggestionClick,
}) => {
  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    console.log("Parts", parts);
    return (
      <span>
        {parts.map((part, index) => {
          return part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={index}>{part}</b>
          ) : (
            part
          );
        })}
      </span>
    );
  };

  return (
    <>
      {suggestions.map((suggestion, index) => {
        const currentSuggestion = nameKey ? suggestion[nameKey] : suggestion;
        return (
          <li
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="suggestions-item"
          >
            {getHighlightedText(currentSuggestion, highlight)}
          </li>
        );
      })}
    </>
  );
};

export default SuggestionList;
