import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ErrorBoundary from "./components/errorBoundary";

import Header from "./components/header";
import Footer from "./components/footer";
import LoadingSpinner from "./components/loadingSpinner";

const Home = lazy(() => import("./containers/home"));
const JobList = lazy(() => import("./containers/jobList"));
const JobSpec = lazy(() => import("./containers/jobSpec"));
const NotFound = lazy(() => import("./components/notFound"));

export default () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/jobs/" exact component={JobList} />
              <Route path="/job-spec/" exact component={JobSpec} />
              <Redirect from="/jbos/:id" to="/job-spec/:id"/>
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </React.Fragment>
    </Router>
  )
}
