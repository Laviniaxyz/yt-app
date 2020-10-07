import React from "react";

function VideoDetail({ selectedVideo }) {
  if (selectedVideo) {
    return (
      <div className="ui segment">
        <div className="ui embed">
          <iframe
            title="video player"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h4 className="ui header">{selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    );
  } else {
    return "Nothing to be displayed";
  }
}

export default VideoDetail;
