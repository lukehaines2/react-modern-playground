import React from "react";
import { Link } from "react-router-dom";

export default class JobList extends React.Component {
  render() {
    return (
      <div>
        <h1>I am the job LIST</h1>
        <ul>
          <li><Link to={"/job-spec/1"}>I am job 1</Link></li>
          <li><Link to={"/job-spec/2"}>I am job 2</Link></li>
          <li><Link to={"/job-spec/3"}>I am job 3</Link></li>
        </ul>
      </div>
    )
  }
}
