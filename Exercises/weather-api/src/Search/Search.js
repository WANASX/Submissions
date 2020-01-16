import React, { Component } from "react";

class Search extends Component {
  state = {
    searchInput: "Beirut"
  };

  sendData = () => {
    this.props.parentCallback(this.StaticRange.searchInput);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={event => {
            this.setState({
              searchInput: event.target.value
            });
          }}
          id="searchBar"
          placeholder="Name of City"
          value={this.state.searchInput}
        />
        <button
          onClick={event => {
            this.sendData(this.state.searchInput);
          }}
          value="find weather"
        >
          FIND WEATRHER
        </button>
      </div>
    );
  }
}

export default Search;
