import React, { useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../youtube";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

const App = () => {
  const [videos, setVideos] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onFormSubmit = async (term) => {
    const results = await youtube.get("/search", { params: { q: term } });
    setVideos(results.data.items);
    setSelectedVideo(results.data.items[0]);
  };

  const onVideoDetailSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={onFormSubmit} />
      <VideoPlayer video={selectedVideo} />
      <VideoList videos={videos} onVideoDetailSelect={onVideoDetailSelect} />
    </div>
  );
};

export default App;
