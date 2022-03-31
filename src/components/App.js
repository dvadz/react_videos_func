import React, { useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../youtube";

const App = () => {
  const onFormSubmit = async (term) => {
    const results = await youtube.get("/search", { params: { q: term } });
  };

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default App;
