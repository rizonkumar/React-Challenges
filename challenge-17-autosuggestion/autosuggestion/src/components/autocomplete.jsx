import React, { useState } from 'react'

const AutoComplete = ({ staticData, fetchSuggestion, placeholder, customLoader, nameKey, onSelect, onChange, onBlur, onFocus, customStyles }) => {

  const [inputVal, setInputVal] = useState() // input provided by user
  const [suggestions, setSuggestions] = useState()
  const [loading, setLoading] = useState()
  const [error, setError] = useState


  const handleInputChange = (e) => {
    setInputVal(e.target.value)
  }
  
  return (
    <div className='container'>
      <input type='key' placeholder={placeholder} style={customStyles} onBlur={onBlur} onFocus={onFocus} onChange={handleInputChange}/>
    </div>
  )
}

export default AutoComplete