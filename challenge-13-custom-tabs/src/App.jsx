import "./App.css";
import Tabs from "./Tabs";

function App() {
  return (
    <div className="App">
      <h1>Custom tabs</h1>
      <Tabs>
        <div title="Home">Tab Content for home</div>
        <div title="About">Tab Content for About</div>
        <div title="Contact">Tab Content for Contact</div>
      </Tabs>
    </div>
  );
}

export default App;
