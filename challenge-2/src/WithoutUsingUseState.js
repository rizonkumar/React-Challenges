import React, {useRef, useState} from "react";

// for doing this we will use "useRef" but that is not the idea way of solving it as it does not render the component
// hence we are not able to render it we are forcely rendering the component

const WithoutUsingUseState = () => {

  const counterRef = useRef(0);
  const [, setForceUpdate] = useState(false);

  const handleClick = () => {
    counterRef.current++;

    // force render (not recommended)
    forceRender();
  };

  const forceRender = () => {
    // Update a dummy state variable to trigger a re-render
    // prev is the previous state of the state variable,
    setForceUpdate((prev) => !prev);
  }


  return (
  <div>
    <p>Using a ref with forced re-rendering</p>
    <button onClick={handleClick}>You pressed me {counterRef.current} times</button>
  </div>
  );
};

export default WithoutUsingUseState;
