import "./Budget.css";
import React, { Component } from "react";

class Budget extends Component {
  render() {
    return <div>Budget: {this.props.budget}$</div>;
  }
}

export default Budget;
