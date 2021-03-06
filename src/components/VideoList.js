import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos, onSelectedVideo }) {
  const renderedList = videos.map((video) => (
    <VideoItem
      onSelectedVideo={onSelectedVideo}
      video={video}
      key={video.id.videoId}
    />
  ));
  return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideoList;
