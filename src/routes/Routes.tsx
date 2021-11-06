import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  StarterView,
  Dashboard,
  DashboardPreview,
  MusicView
} from './../views';
import { DashboardLayout } from './../layout/DashboardLayout';

import { useUserContext } from './../context/User';

const BaseRoutes: FC = () => (
  <Switch>
    <Route exact path="/">
      <DashboardLayout>
        <DashboardPreview />
      </DashboardLayout>
    </Route>
    <Route exact path="/start">
      <StarterView />
    </Route>
    <Route exact path="/muzyk/:id">
      <DashboardLayout>
        <MusicView />
      </DashboardLayout>
    </Route>
  </Switch>
);

const AuthRoutes: FC = () => (
  <Switch>
    <Route exact path="/">
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
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