import React, { useState, useEffect } from 'react'
import "./Tab.css"

export const Tab = ({ tabsData, onTabChangeHandler }) => {
  const [currTabIndx, setCurrTabIndx] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setCurrTabIndx(prev => (prev + 1) % tabsData.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrTabIndx(prev => (prev - 1 + tabsData.length) % tabsData.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [tabsData.length]);

  useEffect(() => {
    onTabChangeHandler(currTabIndx);
  }, [currTabIndx, onTabChangeHandler]);

  return (
    <div className='tab-component'>
      <div className='tabs-container'>
        {tabsData.map((item, index) => (
          <button
            className={`tab-button ${currTabIndx === index ? "active" : ""}`}
            key={index}
            onClick={() => setCurrTabIndx(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className='tabs-content'>
        {tabsData[currTabIndx].content}
      </div>
    </div>
  )
}