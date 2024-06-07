import logo from './logo.svg'
import './App.css';
import AutoComplete from './components/autocomplete';

function App() {

  const staticData = [
    "apple",
    "banana",
    "orange",
    "grape",
    "pear",
    "pineapple",
    "mango",
    "watermelon",
    "strawberry",
    "blueberry",
    "raspberry",
  ];

  const fetchSuggestion = async () => {

  }

  return (
    <div className="App">
      <h1>Autocomplete</h1>

      <AutoComplete
        placeholder={"Enter recipe"}
        staticData = {staticData}
        fetchSuggestion={fetchSuggestion}
        nameKey={"name"}
        customLoader={<p>Loading Recipes...</p>}
        onSelect={(res) => { console.log(res) }}
        onChange={(input) => { }}
        onBlur={(e) => { }}
        onFocus={(e) => { }}
        customStyles={{}}
      />
    </div>
  );
}

export default App;
