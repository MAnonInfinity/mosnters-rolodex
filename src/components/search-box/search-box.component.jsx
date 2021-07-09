import React from 'react';
import './search-box.style.css'
                         
                          // Destructring the props object
export const SearchBox = ({placeholder, handleChange}) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
)