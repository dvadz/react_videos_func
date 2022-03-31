import React from "react";

const SearchBar = () => {
  return (
    <div className='ui segment'>
      <form className='ui form'>
        <div>
          <input type='text' placeholder='Search Youtube Videos'></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
