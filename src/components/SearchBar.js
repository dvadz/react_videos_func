import React from "react";

const SearchBar = ({ onFormSubmit }) => {
  return (
    <div className='ui segment'>
      <form className='ui form' onSubmit={onFormSubmit}>
        <div>
          <input type='text' placeholder='Search Youtube Videos'></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
