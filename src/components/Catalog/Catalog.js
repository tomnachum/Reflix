import React, { Component } from "react";
import "./Catalog.css";
import Movies from "./Movies/Movies";

class Catalog extends Component {
  render() {
    return (
      <div>
        <Movies title="Rented" movies={this.props.movies} />
        <Movies title="Catalog" movies={this.props.movies} />
      </div>
    );
  }
}

export default Catalog;
