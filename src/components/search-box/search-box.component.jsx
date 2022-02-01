import React from 'react';

import './search-box.styles.css';

// Functional components have no access to lifecycle methods and state
// It helps in rendering html on basis of some props.

// We can also deconstruct the props here by using curly braces and writing the properties name.
export const SearchBox = (props) => {
  return (
    <input 
    className='search'
    type="search" 
    onChange={props.handleChange} 
    placeholder= {props.placeholder}
    />
  )
};
