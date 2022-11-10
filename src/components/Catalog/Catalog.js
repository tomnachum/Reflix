import React, { Component } from "react";
import "./Catalog.css";
import Movies from "./Movies/Movies";

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  getRentedMovies = () => {
    return this.props.movies.filter(m => m.isRented);
  };

  handleInputChange = e => {
    this.setState({
      input: e.target.value,
    });
  };

  getFilteredMovies = () => {
    const movies = this.props.movies;
    const input = this.state.input.toLowerCase();
    return movies.filter(m => m.title.toLowerCase().includes(input));
  };

  render() {
    return (
      <div className="catalog">
        <input
          placeholder="Search"
          value={this.state.input}
          onChange={this.handleInputChange}
          className="search-input"
        />
        <Movies
          title="Rented"
          movies={this.getRentedMovies()}
          changeMovieStatus={this.props.changeMovieStatus}
        />
        <Movies
          title="Catalog"
          movies={this.getFilteredMovies()}
          changeMovieStatus={this.props.changeMovieStatus}
        />
      </div>
    );
  }
}

export default Catalog;
