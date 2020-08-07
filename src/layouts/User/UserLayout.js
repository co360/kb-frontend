import React from "react";
import { Route, Switch } from "react-router-dom";

import NavigationBar from "../../components/Shared/Navigation/NavigationBar";

import "./UserLayout.scss";

const UserLayout = (props) => {
  const { routes } = props;
  return (
    <div className="user-layout">
      <NavigationBar />
      <div className="user_layout__content">
        <LoadRoutes routes={routes} />
      </div>
    </div>
  );
};

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
export default UserLayout;
