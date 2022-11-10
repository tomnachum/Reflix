import React, { Component } from "react";
import "./Home.css";
import User from "./User/User";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="center">Who's Watching?</h1>
        <div className="users center">
          {this.props.users.map(u => (
            <User key={u.id} name={u.name} color={u.color} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
