import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  //render videos into list before rendering it
  const renderedList = props.videos.map((video) => {
    return <VideoItem video={video} />;
  });

  return <div>{renderedList}</div>;
};

export default VideoList;
