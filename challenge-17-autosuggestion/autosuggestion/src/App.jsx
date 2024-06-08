import logo from "./logo.svg";
import "./App.css";
import AutoComplete from "./components/autocomplete";

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

  const fetchSuggestion = async (query) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${query}`
      );
      if (!response.ok) {
        throw new Error("Network response is not ok");
      }
      const result = await response.json();
      return result.recipes;
      
    } catch (error) {
      console.error("Failed to fetch suggestions", error);
      return [];
    }
  };

  return (
    <div className="App">
      <h1>Autocomplete</h1>

      <AutoComplete
        placeholder={"Enter recipe"}
        // staticData = {staticData}
        fetchSuggestion={fetchSuggestion}
        nameKey={"name"}
        customLoader={<p>Loading Recipes...</p>}
        onSelect={(res) => {
          console.log(res);
        }}
        onChange={(input) => {}}
        onBlur={(e) => {}}
        onFocus={(e) => {}}
        customStyles={{}}
      />
    </div>
  );
}

export default App;
