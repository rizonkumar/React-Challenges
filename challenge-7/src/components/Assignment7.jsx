import { useState } from "react";

const arr = ["play cricket", "play video game", "read books"];

export default function Assignment7() {
  const [arrCopy, setArrCopy] = useState(arr);
  const [showDeleteButttons, setShowDeleteButttons] = useState(
    Array(arr.length).fill(false)
  );

  //   console.log(Array(arr.length).fill(false));

  const handleDelete = (index) => {
    const newArr = arrCopy.filter((_, i) => i !== index);
    setArrCopy(newArr);
    console.log("New Arr", newArr);
  };

  // value is the index
  const handleCheckbox = (index) => {
    setShowDeleteButttons((prevButtons) => {
      console.log("Previous State:", prevButtons);
      return prevButtons.map((buttonState, i) => {
        if (i === index) {
          return !buttonState;
        } else {
          return buttonState;
        }
      });
    });
    console.log("Show Delete Buttons", showDeleteButttons);
  };

  return (
    <div className="app">
      {/* [] arr button(delete) */}
      <ul>
        {arrCopy.map((element, i) => {
          return (
            <li key={i}>
              <input onChange={() => handleCheckbox(i)} type="checkbox"></input>
              {element}
              <br></br>
              {showDeleteButttons[i] && (
                <button onClick={() => handleDelete(i)}>Delete Item</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
