import React from "react";

class SearchBar extends React.Component {
  //initialize state
  state = {
    term: "",
  };

  //function to control what happens when input changes
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div>
        <form className="ui form container">
          <h4>Search YouTube</h4>
          <div className="ui action input">
            {/* make input controllable using value, state and onChange event handling */}
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              type="text"
              placeholder="Search..."
            />
            <button className="ui button">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
