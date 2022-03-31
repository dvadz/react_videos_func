import React from "react";

const VideoPlayer = ({ video }) => {
  if (!video) return <div></div>;

  return (
    <div>
      <div className='ui embed'>
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title={video.snippet.title}
          allowFullScreen></iframe>
      </div>
      <div className='ui segment'>
        <h4 className='header'>{video.snippet.title}</h4>
        <p className='description'>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
