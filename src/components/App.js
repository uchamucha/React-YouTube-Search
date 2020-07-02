import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
const KEY = "AIzaSyDCK8UiqK-3eXB6krQhwrmEolljdLn4ti0";

class App extends React.Component {
  //define search function to be sent as prop into SearchBar component
  onTermSubmit = (term) => {
    youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        type: "video",
        q: term,
      },
    });
  };

  render() {
    return (
      <div>
        <h1>APP</h1>
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
