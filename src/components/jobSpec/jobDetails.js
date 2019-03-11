import React from "react";

export default ({ job }) => {
  return (
    <section>
      {job &&
        <React.Fragment>
          <p>haha i have an ID bro -> {job.id}</p>
          <p>Description: -> {job.description}</p>
          <p>Location: -> {job.location}</p>
        </React.Fragment>
      }
    </section>
  )
}
