import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className='ui segment'>
      <form className='ui form' onSubmit={onFormSubmit}>
        <div>
          <input
            type='text'
            value={term}
            placeholder='Search Youtube Videos'
            onChange={onInputChange}></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
