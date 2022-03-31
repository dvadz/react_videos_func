import React, { useState } from "react";
import SearchBar from "./SearchBar";

const App = () => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    setTerm(term);
  };

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default App;
