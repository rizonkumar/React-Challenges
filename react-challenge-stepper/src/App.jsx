import "./App.css";
import Stepper from "./components/Stepper";
import { steps } from "./constants";

function App() {
  return (
    <>
      <Stepper steps={steps} />
    </>
  );
}

export default App;
