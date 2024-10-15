import React from 'react';

const SearchBar = ({ handleChange }) => {
  return (
    <div>
      <input 
        type="text" 
        name="lastname" 
        placeholder="Surname" 
        onChange={handleChange} 
      />
      <input 
        type="date" 
        name="minDate" 
        onChange={handleChange} 
      />
      <input 
        type="date" 
        name="maxDate" 
        onChange={handleChange} 
      />
    </div>
  );
};

export default SearchBar