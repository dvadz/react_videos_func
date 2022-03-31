import React, { useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../youtube";

const App = () => {
  const [videos, setVideos] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onFormSubmit = async (term) => {
    const results = await youtube.get("/search", { params: { q: term } });
    setVideos = results.data.items;
    setSelectedVideo(results.data.items[0]);
  };

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default App;
