import React, { useState, useEffect } from "react";
import VideoDetail from "./VideoDetail";

const VideoList = ({ videos, onVideoDetailSelect }) => {
  const [renderedVideos, setRenderedVideos] = useState([]);

  useEffect(() => {
    if (!videos) return;

    const renderedVideos = videos.map((video) => {
      return (
        <VideoDetail
          video={video}
          key={video.id.videoId}
          onVideoDetailSelect={onVideoDetailSelect}
        />
      );
    });
    setRenderedVideos(renderedVideos);
  }, [videos]);

  return <div className='ui divided list'>{renderedVideos}</div>;
};

export default VideoList;
