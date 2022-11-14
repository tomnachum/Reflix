import React, { Component } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { LOGO } from "../../Constants";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="links">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/catalog">
            Catalog
          </NavLink>
        </div>
        <div className="image-container">
          <img src={LOGO.URL} alt="" />
        </div>
      </div>
    );
  }
}

export default NavBar;
