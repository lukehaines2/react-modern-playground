import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jobs/">Jobs</Link>
        </li>
        <li>
          <Link to="/job-spec">Job Spec</Link>
        </li>
      </ul>
      </header>
    )
  }
}
