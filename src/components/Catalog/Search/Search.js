import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleInputChange = e => {
    this.setState({
      input: e.target.value,
    });
    this.props.filterMovies(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          placeholder="Search"
          value={this.state.input}
          onChange={this.handleInputChange}
          className="search-input"
        />
      </div>
    );
  }
}

export default Search;
