import { useEffect, useState } from "react";
import "./App.css";
import useThrottling from "./hooks/useThrottling";

function App() {
  const [count, setCount] = useState(0);

  const throttledValue = useThrottling(count, 1000);

  useEffect(() => {
    const handleScroll = () => {
      setCount(window.scrollY);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "1000rem" }}>
      <div style={{ position: "fixed", top: "0rem" }}>
        <h1>Throttling in Action</h1>
        <hr />
        <h2>Normal : {count}</h2>
        <hr />
        <h2>THrottled : {throttledValue}</h2>
      </div>
    </div>
  );
}

export default App;
