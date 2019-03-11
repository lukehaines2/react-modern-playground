import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./components/errorBoundary";

import Header from "./components/header";
import Footer from "./components/footer";
import LoadingSpinner from "./components/loadingSpinner";

const Home = lazy(() => import("./components/home"));
const JobList = lazy(() => import("./components/jobList"));
const JobSpec = lazy(() => import("./components/jobSpec"));
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
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </React.Fragment>
    </Router>
  )
}
