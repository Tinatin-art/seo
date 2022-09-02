import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to="/sayHello">Say Hello </Link>
        <br />
        <Link to="/redirect">Redirect </Link>
      </div>
    );
  }
}
