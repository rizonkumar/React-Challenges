import React from 'react'

const URLShorten = () => {
  return (
    <div>
        <h2>URL Shortener</h2>
        <div>
            <label>Enter URL : </label>
            <input
            className='form-control'
            placeholder='https://example.com'
            type='text'
            />
        </div>
        <button>Shorten</button>
    </div>
  )
}

export default URLShorten