import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "../components/VideoList";
import VideoDetail from "./VideoDetail";
const KEY = "AIzaSyDCK8UiqK-3eXB6krQhwrmEolljdLn4ti0";

class App extends React.Component {
  //initialize state to store response
  state = {
    videos: [],
    clickedVideo: null,
  };

  //define search function to be sent as prop into SearchBar component
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        type: "video",
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  //define function to update state with clicked video. To be sent as prop to VideoList component.
  onVideoClick = (video) => {
    this.setState({ clickedVideo: video });
  };

  render() {
    return (
      <div>
        <h1>APP</h1>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.clickedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoClick={this.onVideoClick}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
