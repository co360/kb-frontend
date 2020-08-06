import React from "react";
import { Route, Switch } from "react-router-dom";

import "./AdminLayout";

const AdminLayout = (props) => {
  const { routes } = props;

  return <LoadRoutes routes={routes} />;
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

export default AdminLayout;
