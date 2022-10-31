import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  RegisterView,
  LoginView,
  Dashboard,
  DashboardPreview,
  MusicView,
  MusicViewExtended,
  BandList,
  BandProfile,
  BandCreation,
  BandUpdate,
} from './../views';
import { DashboardLayout } from './../layout/DashboardLayout';
import { PATHS } from './../utils/consts';

import { useUserContext } from './../context/User';
import { UserProfile } from '../views/UserProfile';

const BaseRoutes: FC = () => (
  <Switch>
    <Route exact path="/">
      <DashboardLayout>
        <DashboardPreview />
      </DashboardLayout>
    </Route>
    <Route exact path={PATHS.START}>
      <RegisterView />
    </Route>
    <Route exact path={PATHS.LOGIN}>
      <LoginView />
    </Route>
    <Route exact path={`${PATHS.MUSIC}/:id`}>
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
    <Route exact path={PATHS.BANDS}>
      <DashboardLayout>
        <BandList />
      </DashboardLayout>
    </Route>
    <Route exact path={PATHS.CREATE_BAND}>
      <DashboardLayout>
        <BandCreation />
      </DashboardLayout>
    </Route>
    <Route exact path={`${PATHS.BANDS}/:id`}>
      <DashboardLayout>
        <BandProfile />
      </DashboardLayout>
    </Route>
    <Route exact path={`${PATHS.BANDS_EDIT}/:id`}>
      <DashboardLayout>
        <BandUpdate />
      </DashboardLayout>
    </Route>
    <Route exact path={PATHS.PROFILE}>
      <DashboardLayout>
        <UserProfile />
      </DashboardLayout>
    </Route>
    <Route exact path={`${PATHS.MUSIC}/:id`}>
      <DashboardLayout>
        <MusicViewExtended />
      </DashboardLayout>
    </Route>
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