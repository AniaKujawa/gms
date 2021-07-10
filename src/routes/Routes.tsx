import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { StarterView, Dashboard, DashboardPreview } from './../views';

import { useUserContext } from './../context/User';

const BaseRoutes: FC = () => (
  <Switch>
    <Route exact path="/">
      <StarterView />
    </Route>
    <Route exact path="/dashboard">
      <DashboardPreview />
    </Route>
  </Switch>
);

const AuthRoutes: FC = () => (
  <Switch>
    <Route exact path="/dashboard">
      <Dashboard />
    </Route>
    <Redirect key="dashboardRedirect" exact from="/" to="/dashboard" />
  </Switch>
);

export const Routes: FC = () => {
  const { isLoggedIn } = useUserContext();

  return (
    isLoggedIn ? 
      <AuthRoutes /> : <BaseRoutes />
  )
}