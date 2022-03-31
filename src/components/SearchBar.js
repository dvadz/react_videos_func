import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(term);
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
