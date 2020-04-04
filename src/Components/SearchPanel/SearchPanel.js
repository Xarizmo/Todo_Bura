import React from "react";
import './SearchPanel.css';

const SearchPanel = () => {
  return (
    <input type='text'
      className='form-control search-input'
      placeholder='type here to search' />
  );
};

export default SearchPanel;