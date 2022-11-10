import React, { Component } from "react";
import Movie from "./Movie/Movie";
import "./Movies.css";

class Movies extends Component {
  render() {
    return (
      <div className="movies">
        {this.props.movies.length ? (
          <div>
            <h2 className="title">{this.props.title}:</h2>
            <div className="movies-container">
              {this.props.movies.map(m => (
                <Movie
                  key={m.id}
                  movie={m}
                  changeMovieStatus={this.props.changeMovieStatus}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Movies;
