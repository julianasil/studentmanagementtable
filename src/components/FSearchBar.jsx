import React from 'react'

const FSearchBar = ({ handleChange }) => {
  return (
    <div>
        <input 
        type="text" 
        name="firstname" 
        placeholder="First Name" 
        onChange={handleChange} 
      />
    </div>
  )
}

export default FSearchBar;