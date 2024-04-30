import { useState } from "react";
import "./App.css";
import { items } from "./item";

function App() {
  const filters = ["Bags", "Watches", "Sports", "Sunglasses"];
  const [filteredData, setFilteredData] = useState(items);
  const [activeFilter, setActiveFilter] = useState([]);

  const handleFilterClick = (e) => {
    const category = e.target.id;
    console.log(category);
    if (activeFilter.includes(category)) {
      // toogle false
      const filters = activeFilter.filter((el) => el !== category);
      console.log(filters);
      setActiveFilter(filters);
    } else {
      // toogle true
      setActiveFilter([...activeFilter, category]);
    }
  };
  console.log("active filter", activeFilter);
  return (
    <div className="App">
      <div className="filters" onClick={handleFilterClick}>
        {filters.map((item, index) => (
          <button key={index} id={item}>
            {item}
          </button>
        ))}
      </div>

      <div className="product-list">
        {filteredData.map((item, index) => (
          <div className="item" key={index}>
            <p>{item.name}</p>
            <p className="category">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
