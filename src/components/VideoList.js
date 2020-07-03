import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  //process the information before returning

  const renderedList = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoClick={props.onVideoClick}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
