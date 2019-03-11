import React from "react";

import JobDetails from "./jobDetails";
import { JOBS } from "./fakeJobs";

import "./jobSpec.css";

export default class JobSpecDetails extends React.Component {
  render() {
    const { id } = this.props;
    const job = findJob(id);

    /* Tried adding an ErrorBoundary for jobDetails component when job was undefined,
       but it didnt render behind the callsatck in dev env,
       so I think something is missing in the ErrorBounary component :(
       https://github.com/facebook/create-react-app/issues/3627
    */
    return (
      <div className="jobSpecContainer">
        <div className="jobSpecInner">
          <section className="leftSection">
            Chuck some components in here like a map
            <p>map would have logic here for if(job.location === "london") then show london map etc</p>
          </section>
          <JobDetails job={job} />
          <section className="rightSection">
            Chuck some other omponents in here like links
          </section>
        </div>
      </div>
    )
  }
}

function findJob(id) {
  return JOBS.find(job => job.id === id);
}
