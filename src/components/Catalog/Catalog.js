import React, { Component } from "react";
import "./Catalog.css";
import Movies from "./Movies/Movies";

class Catalog extends Component {
  getRentedMovies = () => {
    return this.props.movies.filter(m => m.isRented);
  };

  render() {
    const rentedMovies = this.getRentedMovies();
    return (
      <div className="catalog">
        {rentedMovies.length ? (
          <Movies
            title="Rented"
            movies={rentedMovies}
            changeMovieStatus={this.props.changeMovieStatus}
          />
        ) : null}

        <Movies
          title="Catalog"
          movies={this.props.movies}
          changeMovieStatus={this.props.changeMovieStatus}
        />
      </div>
    );
  }
}

export default Catalog;
