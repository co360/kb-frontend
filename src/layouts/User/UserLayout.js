import React from "react";
import { Route, Switch } from "react-router-dom";

import NavigationBar from "../../components/Shared/Navigation/NavigationBar";

import "./UserLayout.scss";

const UserLayout = (props) => {
  const { routes } = props;
  return (
    <div className="user-layout">
      <NavigationBar />
      <div className="user-layout__content">
        <LoadRoutes routes={routes} />
      </div>
    </div>
  );
};

function LoadRoutes(props) {
  const { routes } = props;
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={(routeProps) => <route.component {...routeProps} />}
        />
      ))}
    </Switch>
  );
}
export default UserLayout;
