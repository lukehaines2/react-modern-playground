import React, { Component } from "react";

import logo from "./static/svg/logo.svg";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://adludio.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
  }
}
