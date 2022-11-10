import React, { Component } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

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
          <img src="https://portalrefil.com.br/wp-content/uploads/2021/07/logo-reflix-quadrado.png" />
        </div>
      </div>
    );
  }
}

export default NavBar;
