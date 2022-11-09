import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
        </div>
        <div className="image-container">
          <img src="https://portalrefil.com.br/wp-content/uploads/2021/07/logo-reflix-quadrado.png" />
        </div>
      </div>
    );
  }
}

export default NavBar;
