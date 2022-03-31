import React, { useState, useEffect } from "react";

const VideoList = ({ videos }) => {
  const [renderedVideos, setRenderedVideos] = useState([]);

  useEffect(() => {
    if (!videos) return;

    const renderedVideos = videos.map((video) => {
      return (
        <div className='item' key={video.id.videoId}>
          <div className='title'>{video.snippet.title}</div>
        </div>
      );
    });
    setRenderedVideos(renderedVideos);
  }, [videos]);

  return <div>{renderedVideos}</div>;
};

export default VideoList;
