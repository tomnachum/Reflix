import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./User.css";

class User extends Component {
  render() {
    return (
      <Link
        to="/catalog"
        className="user"
        style={{ backgroundColor: this.props.color }}
      >
        <div className="center">
          <h2 className="center">{this.props.name}</h2>
        </div>
      </Link>
    );
  }
}

export default User;
