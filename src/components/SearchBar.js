import "./SearchBar.css";
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

  //function to control what happens when form submits
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            {/* make input controllable using value, state and onChange event handling */}
            <label>Video Search</label>
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              type="text"
              placeholder="Search..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
