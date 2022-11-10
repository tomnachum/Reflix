import React, { Component } from "react";
import "./Movie.css";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

class Movie extends Component {
  changeStatus = () => {
    this.props.changeMovieStatus(
      this.props.movie.id,
      !this.props.movie.isRented
    );
  };

  render() {
    return (
      <div className="movie center">
        <div className="btn-container" onClick={this.changeStatus}>
          {this.props.movie.isRented ? (
            <FaMinusCircle className="btn" />
          ) : (
            <FaPlusCircle className="btn" />
          )}
        </div>
        <div className="box">
          <img src={this.props.movie.img} alt="" />
        </div>
      </div>
    );
  }
}

export default Movie;
