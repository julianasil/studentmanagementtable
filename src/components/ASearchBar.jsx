import React from 'react'

const ASearchBar = ({ handleChange }) => {
  return (
    <div>
        <input 
        type="number" 
        name="exactAge" 
        placeholder="Age" 
        onChange={handleChange} 
      />
    </div>
  )
}

export default ASearchBar