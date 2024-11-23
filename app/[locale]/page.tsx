import React from 'react';
import {useTranslations} from 'next-intl';
import {DashboardLayout} from '../../src/layout/DashboardLayout';
import {Dashboard} from '../../src/views/Dashboard';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Skrzypiec page',
}

export default function Page() {
  const t = useTranslations('dashboard');

  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
}