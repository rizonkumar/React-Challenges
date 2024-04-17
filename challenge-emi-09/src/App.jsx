import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [principale, setPrincipale] = useState(0);
  const [interest, setinterest] = useState(0);
  const [year, setyear] = useState(0);
  const [emi, setEMI] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if (id === "principale") {
      setPrincipale(value);
    } else if (id === "interest") {
      setinterest(value);
    } else {
      setyear(value);
    }
  };

  const calculateEMI = () => {
    let r = interest;
    if (principale && r && year) {
      r = r / 12 / 100; // per month
      const calPow = Math.pow(1 + r, year * 12);
      const amount = principale * ((r * calPow) / (calPow - 1));
      setEMI(amount);
    }
  };

  useEffect(() => {
    calculateEMI();
  }, [principale, interest, year]);

  return (
    <div className="loan-calc">
      <h1>Mortgage Calculator</h1>
      <div className="inputes">
        <p>Principale:</p>
        <input onChange={handleChange} type="number" id="principale" />
        <p>Interest:</p>
        <input onChange={handleChange} type="number" id="interest" />
        <p>Year:</p>
        <input onChange={handleChange} type="number" id="year" />
      </div>
      <div className="output">your emi is {emi}</div>
    </div>
  );
}

export default App;
