import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  StarterView,
  Dashboard,
  DashboardPreview,
  MusicView,
  BandList,
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
    <Redirect from="*" to="/" />
  </Switch>
);

const AuthRoutes: FC = () => (
  <Switch>
    <Route exact path="/">
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </Route>
    <Route exact path="/my-bands">
      <DashboardLayout>
        <BandList />
      </DashboardLayout>
    </Route>
    <Route exact path="/muzyk/:id">
      <DashboardLayout>
        <MusicView />
      </DashboardLayout>
    </Route>
    <Redirect from="/dashboard" to="/" />
    <Redirect from="*" to="/" />
  </Switch>
);

export const Routes: FC = () => {
  const { isLoggedIn } = useUserContext();

  return (
    isLoggedIn ? 
      <AuthRoutes /> : <BaseRoutes />
  )
}