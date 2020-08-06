import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./config/routes";

import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

function RouteWithSubRoutes(props) {
  return (
    <Route
      path={props.path}
      exact={props.exact}
      render={(routeProps) => (
        <props.component routes={props.routes} {...routeProps} />
      )}
    />
  );
}

export default App;
