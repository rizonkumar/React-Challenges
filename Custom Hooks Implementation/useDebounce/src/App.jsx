import { useState } from "react";
import "./App.css";
import useDebouce from "./hooks/useDebouce";

function App() {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebouce(search, 2000);

  return (
    <div className="App">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <hr />
      <h2>Normal : {search}</h2>
      <h3>Debouce: {debouncedValue}</h3>
    </div>
  );
}

export default App;
