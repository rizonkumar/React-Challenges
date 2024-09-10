import React, { useEffect, useRef, useState } from "react";

const useThrottling = (value, delay) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const flagRef = useRef(true);

  useEffect(() => {
    if (flagRef.current) {
      setThrottledValue(value);
      flagRef.current = false;
      setTimeout(() => {
        flagRef.current = true;
      }, delay);
    }
  }, [value, delay]);

  return throttledValue;
};

export default useThrottling;
