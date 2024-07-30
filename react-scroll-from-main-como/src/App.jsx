import React, { useRef, useState } from 'react';
import SimpleTable from './component/SimpleTable';
import ScrollableTable from './component/ScrollableTable';

const App = () => {
  const simpleTableRef = useRef(null);
  console.log(simpleTableRef, "Simple Table Ref")
  const scrollableTableRef = useRef(null);
  console.log(scrollableTableRef, "Scrollable Table Ref")

  const [tableData, setTableData] = useState([
    { id: 1, name: 'Apple', category: 'Fruit', price: '$1' },
    { id: 2, name: 'Carrot', category: 'Vegetable', price: '$0.5' },
    { id: 3, name: 'Banana', category: 'Fruit', price: '$0.75' },
    { id: 4, name: 'Broccoli', category: 'Vegetable', price: '$1.5' },
    { id: 5, name: 'Orange', category: 'Fruit', price: '$1.2' },
    { id: 6, name: 'Lettuce', category: 'Vegetable', price: '$1' },
    { id: 7, name: 'Grapes', category: 'Fruit', price: '$2' },
    { id: 8, name: 'Potato', category: 'Vegetable', price: '$0.3' },
    { id: 9, name: 'Mango', category: 'Fruit', price: '$1.5' },
    { id: 10, name: 'Tomato', category: 'Vegetable', price: '$0.8' },
    { id: 11, name: 'Tomato', category: 'Vegetable', price: '$0.8' },
    { id: 12, name: 'Tomato', category: 'Vegetable', price: '$0.8' },
    { id: 13, name: 'Tomato', category: 'Vegetable', price: '$0.8' },
    { id: 14, name: 'Tomato', category: 'Vegetable', price: '$0.8' }
  ]);

  const handleScroll = (event) => {
    console.log(`${event} table scrolled`);
    if (event === 'simple') {
      const scrollTop = simpleTableRef.current.scrollTop;
      console.log('Simple Table ScrollTop:', scrollTop);
      scrollableTableRef.current.scrollTop = scrollTop;
    } else if (event === 'scrollable') {
      const scrollTop = scrollableTableRef.current.scrollTop;
      console.log('Scrollable Table ScrollTop:', scrollTop);
      simpleTableRef.current.scrollTop = scrollTop;
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <SimpleTable ref={simpleTableRef} tableData={tableData} onScroll={() => handleScroll('simple')} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      <ScrollableTable ref={scrollableTableRef} tableData={tableData} onScroll={() => handleScroll('scrollable')} />
    </div>
  );
};

export default App;
