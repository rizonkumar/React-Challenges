import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./ProgressBar";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      if (progress < 100) [setProgress((p) => p + 1)];
    }, 20);
    console.log(time);
    console.log(progress);
    return () => {
      clearInterval(time);
    };
  }, [progress]);

  return (
    <div className="App">
      <ProgressBar progress={progress} color={"lightgreen"} />
    </div>
  );
}

export default App;
