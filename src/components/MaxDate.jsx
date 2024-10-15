import React from 'react'

const MaxDate = ({ handleChange }) => {
  return (
    <div>
        <input 
        type="date" 
        name="maxDate" 
        onChange={handleChange} 
        />
    </div>
  )
}

export default MaxDate