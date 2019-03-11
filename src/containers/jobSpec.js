import React from "react";

import JobSpec from "../components/jobSpec";

export default class JobSpecContainer extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        {match.params.id ?
          <JobSpec id={match.params.id} />
          : <JobSpecNoId />
        }
      </div>
    )
  }
}


// This could be refactored into a component
// It could also be simplified and rendered redundant using <Redirect> in the routing if the /job-spec route is used without an :/id
// This would of course depend on the spec given by whoever is Product Owner!!
function JobSpecNoId() {
  return <h1>I am the job SPECCCCC</h1>
}
