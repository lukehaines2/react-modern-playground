import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import ErrorBoundary from "./components/errorBoundary";
import LoadingSpinner from "./components/loadingSpinner";
import Header from "./components/header";
import Footer from "./components/footer";

const Home = lazy(() => import("./containers/home"));
const JobList = lazy(() => import("./containers/jobList"));
const JobSpec = lazy(() => import("./containers/jobSpec"));
const NotFound = lazy(() => import("./components/notFound"));

/*
  NOTE! React.lazy makes Route's proptypes fail :(
  https://github.com/ReactTraining/react-router/issues/6420
  I have fixed for now by using "react-router-dom": "^4.4.0-beta.6"
  Would be good to update to next stable release of react-router-dom and stop using beta when possible!
*/

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
              <Route path="/job-spec/:id" exact component={JobSpec} />
              <Redirect from="/job-spec-redirect/" to="/jobs/"/>
              <Redirect from="/jobs/:id" to="/job-spec/:id"/>
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </React.Fragment>
    </Router>
  )
}
