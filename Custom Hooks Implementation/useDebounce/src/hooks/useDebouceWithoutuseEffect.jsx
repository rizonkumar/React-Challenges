import { useState, useCallback } from "react";

// This is our custom hook for debouncing
const useDebounceWithoutEffect = (value, delay) => {
  // Initialize state with the provided value or an empty string
  const [debouncedValue, setDebouncedValue] = useState(value || "");

  // Create a debounced function that only updates after the specified delay
  // useCallback ensures this function is only recreated if the delay changes
  const debouncedFn = useCallback(debounce(setDebouncedValue, delay), [delay]);

  // Call the debounced function with the current value
  // This schedules an update of debouncedValue after the delay
  debouncedFn(value);

  // Return the current debounced value
  return debouncedValue;
};

// This is our debounce utility function
function debounce(callback, delay) {
  let timeoutId;

  // Return a function that will be called with the latest arguments
  return function debounceFn(...args) {
    // If there's an existing timeout, clear it
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a new timeout
    timeoutId = setTimeout(() => {
      // After the delay, call the original callback with the latest arguments
      callback(...args);
    }, delay);
  };
}

export default useDebounceWithoutEffect;
