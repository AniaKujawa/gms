import React, { FC } from 'react';
import { Header } from '../components';


export const DashboardLayout: FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);