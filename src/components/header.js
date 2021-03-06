import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs/">Jobs</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/job-spec">Job Spec</Link>
            </li>
            <li>
              <a href="https://adludio.com" target="_blank" rel="noopener noreferrer">external adludio</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
