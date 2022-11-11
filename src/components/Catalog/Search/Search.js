import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  handleInputChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          placeholder="Search"
          value={this.props.input}
          onChange={this.handleInputChange}
          className="search-input"
        />
      </div>
    );
  }
}

export default Search;
