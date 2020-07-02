import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
const KEY = "AIzaSyDCK8UiqK-3eXB6krQhwrmEolljdLn4ti0";

class App extends React.Component {
  //initialize state to store response
  state = {
    videos: [],
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

  render() {
    return (
      <div>
        <h1>APP</h1>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
