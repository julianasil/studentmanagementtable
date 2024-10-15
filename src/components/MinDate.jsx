import React from 'react'

const MinDate = ({ handleChange }) => {
  return (
    <div>
        <input 
        type="date" 
        name="minDate" 
        onChange={handleChange} 
        />
    </div>
  )
}

export default MinDate