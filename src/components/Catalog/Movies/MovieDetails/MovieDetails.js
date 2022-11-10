import React, { Component } from "react";
import "./MovieDetails.css";

class MovieDetails extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <div className="movie-details">
        <h1 className="title center">
          {movie.title} ({movie.year})
        </h1>
        <div className="center">
          <img src={movie.img} alt="" className="movie-img"></img>
        </div>
        <p className="description">{movie.descrShort}</p>
      </div>
    );
  }
}

export default MovieDetails;
