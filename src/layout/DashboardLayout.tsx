"use client"
import React, { FC, ReactNode } from 'react';
import { Header } from '../components';

interface Props {
  children: ReactNode;
}

export const DashboardLayout: FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);