import { useState } from "react";
import "./App.css";
import useDebouce from "./hooks/useDebouce";
import useDebouceWithoutEffect from "./hooks/useDebouceWithoutuseEffect";

function App() {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebouce(search, 2000);

  const deboucedValueWithoutEffect = useDebouceWithoutEffect(search, 2000);

  return (
    <div className="App">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <hr />
      <h2>Normal : {search}</h2>
      <h3>Debouce with effect: {debouncedValue}</h3>
      <h3>Debouce without effect: {deboucedValueWithoutEffect}</h3>
    </div>
  );
}

export default App;
