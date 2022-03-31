import React from "react";

const VideoDetail = ({ video, onVideoDetailSelect }) => {
  const onVideoDetailClick = (event) => {
    event.preventDefault();
    onVideoDetailSelect(video);
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
