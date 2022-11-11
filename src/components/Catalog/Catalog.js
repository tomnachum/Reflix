import React, { Component } from "react";
import Budget from "./Budget/Budget";
import "./Catalog.css";
import Movies from "./Movies/Movies";
import Search from "./Search/Search";

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  handleInputChange = updatedInput => {
    this.setState({
      input: updatedInput,
    });
  };

  getRentedMovies = () => {
    return this.props.movies.filter(m => m.isRented);
  };

  getFilteredMovies = () => {
    const movies = this.props.movies;
    const input = this.state.input.toLowerCase();
    return movies.filter(m => m.title.toLowerCase().includes(input));
  };

  render() {
    return (
      <div className="catalog">
        <Search input={this.state.input} onChange={this.handleInputChange} />
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
