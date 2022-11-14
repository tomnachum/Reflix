import React, { Component } from "react";
import Budget from "./Budget/Budget";
import "./Catalog.css";
import Movies from "./Movies/Movies";
import Search from "./Search/Search";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredMovies: this.props.movies,
    };
  }

  getRentedMovies = () => {
    return this.props.movies.filter(m => m.isRented);
  };

  getFilteredMovies = input => {
    const movies = this.props.movies;
    const inputLower = input.toLowerCase();
    this.setState({
      filteredMovies: movies.filter(m =>
        m.title.toLowerCase().includes(inputLower)
      ),
    });
  };

  render() {
    return (
      <div className="catalog">
        <div className="menu">
          <div className="search">
            <Search filterMovies={this.getFilteredMovies} />
          </div>
          <div className="budget">
            <Budget budget={this.props.budget} />
          </div>
        </div>
        <br />
        <Movies
          title="Rented"
          movies={this.getRentedMovies()}
          changeMovieStatus={this.props.changeMovieStatus}
        />
        <Movies
          title="Catalog"
          movies={this.state.filteredMovies}
          changeMovieStatus={this.props.changeMovieStatus}
        />
      </div>
    );
  }
}

export default Catalog;
