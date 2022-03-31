import React from "react";

const VideoDetail = ({ video }) => {
  const onVideoDetailClick = (event) => {
    event.preventDefault();
    console.log("Click", video);
  };

  return (
    <div className='item' onClick={onVideoDetailClick}>
      <div className='content'>
        <img className='ui image' src={video.snippet.thumbnails.default.url} />
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
