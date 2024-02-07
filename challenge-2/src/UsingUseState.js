import React, { useState } from "react";

const UsingUseState = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>With using useState</p>
      <button onClick={handleClick}>You pressed me {count} times</button>
    </div>
  );
};

export default UsingUseState;
