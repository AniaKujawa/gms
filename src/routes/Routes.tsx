import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { StarterView, Dashboard, DashboardPreview } from './../views';

import { useUserContext } from './../context/User';

const BaseRoutes: FC = () => (
  <Switch>
    <Route exact path="/">
      <DashboardPreview />
    </Route>
    <Route exact path="/start">
      <StarterView />
    </Route>
  </Switch>
);

const AuthRoutes: FC = () => (
  <Switch>
    <Route exact path="/">
      <Dashboard />
    </Route>
  </Switch>
);

export const Routes: FC = () => {
  const { isLoggedIn } = useUserContext();

  return (
    isLoggedIn ? 
      <AuthRoutes /> : <BaseRoutes />
  )
}