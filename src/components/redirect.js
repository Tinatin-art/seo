import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Redirection extends Component {
  render() {
    return <Redirect to="/good-luck" />;
  }
}
