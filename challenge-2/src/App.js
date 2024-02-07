import "./App.css";
import UsingUseState from "./UsingUseState";
import WithoutUsingUseState from "./WithoutUsingUseState";

// Create a React component that increament a counter when a button is clicked.
// Note: With useState hook and without any useState/class state hook

function App() {
  return (
    <div>
      <UsingUseState />
      <WithoutUsingUseState />
    </div>
  );
}

export default App;
