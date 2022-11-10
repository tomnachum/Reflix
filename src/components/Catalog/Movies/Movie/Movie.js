import React, { Component } from "react";
import "./Movie.css";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

class Movie extends Component {
  changeStatus = e => {
    e.preventDefault();
    this.props.changeMovieStatus(
      this.props.movie.id,
      !this.props.movie.isRented
    );
  };

  render() {
    return (
      <div className="movie center">
        <Link to={`/movies/${this.props.movie.id}`}>
          <div className="box">
            <div className="btn-container" onClick={this.changeStatus}>
              {this.props.movie.isRented ? (
                <FaMinusCircle className="btn" />
              ) : (
                <FaPlusCircle className="btn" />
              )}
            </div>
            <img src={this.props.movie.img} alt="" />
          </div>
        </Link>
      </div>
    );
  }
}

export default Movie;
