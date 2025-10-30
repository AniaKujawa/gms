import React, { FC } from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
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
  UserProfile,
  UserProfileUpdate
} from './../views';
import { DashboardLayout } from './../layout/DashboardLayout';
import { PATHS } from './../utils/consts';

import { useUserContext } from './../context/User';

const BaseRoutes: FC = () => (
  <RouterRoutes>
    <Route path="/" element={<DashboardLayout><DashboardPreview /></DashboardLayout>} />
    <Route path={PATHS.START} element={<RegisterView />} />
    <Route path={PATHS.LOGIN} element={<LoginView />} />
    <Route path={`${PATHS.MUSIC}/:id`} element={<DashboardLayout><MusicView /></DashboardLayout>} />
    <Route path="*" element={<Navigate to="/" />} />
  </RouterRoutes>
);

const AuthRoutes: FC = () => (
  <RouterRoutes>
    <Route path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
    <Route path={PATHS.BANDS} element={<DashboardLayout><BandList /></DashboardLayout>} />
    <Route path={PATHS.CREATE_BAND} element={<DashboardLayout><BandCreation /></DashboardLayout>} />
    <Route path={`${PATHS.BANDS}/:id`} element={<DashboardLayout><BandProfile /></DashboardLayout>} />
    <Route path={`${PATHS.BANDS_EDIT}/:id`} element={<DashboardLayout><BandUpdate /></DashboardLayout>} />
    <Route path={PATHS.PROFILE} element={<DashboardLayout><UserProfile /></DashboardLayout>} />
    <Route path={PATHS.PROFILE_EDIT} element={<DashboardLayout><UserProfileUpdate /></DashboardLayout>} />
    <Route path={`${PATHS.MUSIC}/:id`} element={<DashboardLayout><MusicViewExtended /></DashboardLayout>} />
    <Route path="*" element={<Navigate to="/" />} />
  </RouterRoutes>
);

export const Routes: FC = () => {
  const { isLoggedIn } = useUserContext();

  return (
    isLoggedIn ? 
      <AuthRoutes /> : <BaseRoutes />
  )
}