import React, { useCallback, useEffect, useState } from "react";
import "./style.css";
import SuggestionList from "./suggestion-list";
import debounce from "lodash/debounce";


const AutoComplete = ({
  staticData,
  fetchSuggestion,
  placeholder = "",
  customLoader = "Loading...",
  nameKey = "",
  onSelect = () => { },
  onChange = () => { },
  onBlur = () => { },
  onFocus = () => { },
  customStyles = {},
}) => {
  const [inputVal, setInputVal] = useState(""); // input provided by user
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("Suggestions", suggestions);

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
    onChange(e.target.value);
  };

  const getSuggestions = async (query) => {
    setError(null);
    setLoading(true);
    try {
      let result;
      if (staticData) {
        result = staticData.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase());
        });
      } else if (fetchSuggestion) {
        result = await fetchSuggestion(query);
      }
      setSuggestions(result);
    } catch (error) {
      setError("Failed to fetch suggestions");
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputVal(nameKey ? suggestion[nameKey] : nameKey)
    onSelect(suggestion)
    setSuggestions([])
  };

  const getSuggestionsDebounced = useCallback(debounce(getSuggestions, 300), []);

  useEffect(() => {
    if (inputVal?.length > 1) {
      getSuggestionsDebounced(inputVal);
    } else {
      setSuggestions([]);
    }
  }, [inputVal]);

  return (
    <div className="container">
      <input
        type="key"
        placeholder={placeholder}
        style={customStyles}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleInputChange}
      />

      {(suggestions.length > 0 || loading || error) && (
        <ul className="suggestions-list">
          {error && <div className="error">{error}</div>}

          {loading && <div className="loading">{customLoader}</div>}
          <SuggestionList
            nameKey={nameKey}
            highlight={inputVal}
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
          />
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
