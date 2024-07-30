import React, { forwardRef } from "react";

const ScrollableTable = forwardRef(({ tableData, onScroll }, ref) => {
  console.log("Rendering ScrollableTable");
  return (
    <div
      ref={ref}
      onScroll={onScroll}
      style={{ maxHeight: "200px", overflowY: "auto" }}
    >
      <h2>Scrollable Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default ScrollableTable;
