import React from "react";

const VideoDetail = ({ video }) => {
  return (
    <div className='item'>
      <div className='content'>
        <img className='ui image' src={video.snippet.thumbnails.default.url} />
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
