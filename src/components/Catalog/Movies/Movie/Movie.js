import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  render() {
    return (
      <div className="movie center">
        <div className="box">
          <img src={this.props.movie.img} alt="" />
        </div>
      </div>
    );
  }
}

export default Movie;
