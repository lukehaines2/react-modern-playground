import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./components/home";
import JobList from "./components/jobList";
import JobSpec from "./components/jobSpec";
import NotFound from "./components/notFound";

export default () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/jobs/" exact component={JobList} />
          <Route path="/job-spec/" exact component={JobSpec} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
  )
}
