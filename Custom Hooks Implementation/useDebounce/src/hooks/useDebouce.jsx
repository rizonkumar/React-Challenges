import { useEffect, useState } from "react";

const useDebouce = (value, delay) => {
  const [deboucedValue, setDebouncedValue] = useState(value || "");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timerId);
  }, [value]);

  return deboucedValue;
};

export default useDebouce;
