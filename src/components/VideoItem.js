import React from "react";

const VideoItem = (props) => {
  console.log(props);
  return (
    <div className="item">
      <img
        className="ui image"
        src={props.video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
