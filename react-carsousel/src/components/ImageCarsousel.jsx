import React, { useEffect, useState } from "react";
import data from "../data.json"
console.log("Daat", data)

const ImageCarsousel = () => {
  const [index, setIndex] = useState(0);
  const DATA_LENGTH = data.length;

  const handleNext = () => {
    if(index == DATA_LENGTH - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1);
    }
  }

  const handlePrev = () => {
    if(index == 0) {
      setIndex(DATA_LENGTH - 1);
    } else {
      setIndex(index - 1)
    }
  }

  // 12:00
useEffect(() => {
  setInterval(handleNext, 1000)
}, [])

  return (
    <div className="container">
      <div onClick={handlePrev} className="left-btn">{"<"}</div>
      <img src = {data[index].download_url} alt="image"/>
      <div onClick={handleNext} className="right-btn">{">"}</div>
    </div>
  );
};

export default ImageCarsousel;
