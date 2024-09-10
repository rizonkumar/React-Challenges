import "./App.css";
import FAQ from "./components/FAQ";
import data from "./data/faqData.json";

function App() {
  return (
    <>
      <FAQ data={data} />
    </>
  );
}

export default App;
