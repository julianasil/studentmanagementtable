import React from 'react'

const CSearchBar = ({ handleChange }) => {
  return (
    <div>
    <input 
        type="text" 
        name="course" 
        placeholder="Course" 
        onChange={handleChange} 
      />
    </div>
  )
}

export default CSearchBar;