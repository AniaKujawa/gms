import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { StarterView, Dashboard } from './../views';

import { useUserContext } from './../context/User';

const BaseRoutes: FC = () => (
  <Switch>
    <Route path="/">
      <StarterView />
    </Route>
  </Switch>
);

const AuthRoutes: FC = () => (
  <Switch>
    <Route path="/">
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