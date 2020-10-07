import React from "react";
import "./VideoItem.css";

function VideoItem({ video, onSelectedVideo }) {
  return (
    <div className="video-item item" onClick={() => onSelectedVideo(video)}>
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      ></img>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;
