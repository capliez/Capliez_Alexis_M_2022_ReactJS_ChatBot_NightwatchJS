import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/menu";
import { CircularProgress } from "@material-ui/core";

const AuthPage = React.lazy(() =>
  import(/* webpackChunkName: "Auth" */ "./components/auth")
);

const HomePage = React.lazy(() =>
  import(/* webpackChunkName: "Home" */ "./components/home")
);

const Routes = () => {
  return (
    <>
      <Menu />

      <Suspense fallback={<CircularProgress className="loading" />}>
        <Router>
          <Switch>
            <Route path="/" exact render={(props) => <AuthPage {...props} />} />
            <Route path="/home" render={(props) => <HomePage {...props} />} />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
};

export default Routes;
