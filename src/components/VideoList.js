import React, { useState, useEffect } from "react";
import VideoDetail from "./VideoDetail";

const VideoList = ({ videos }) => {
  const [renderedVideos, setRenderedVideos] = useState([]);

  useEffect(() => {
    if (!videos) return;

    const renderedVideos = videos.map((video) => {
      return <VideoDetail video={video} />;
    });
    setRenderedVideos(renderedVideos);
  }, [videos]);

  return <div>{renderedVideos}</div>;
};

export default VideoList;
