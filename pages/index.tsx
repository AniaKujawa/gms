import React, { ReactElement } from 'react';
import { Dashboard } from './../src/views/Dashboard';
import { DashboardLayout } from './../src/layout/DashboardLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';

const Page = () => (
  <Dashboard />
)

export const getStaticProps: GetStaticProps<{}> = async ({
  locale
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'pl', [
      'dashboard', 'signing', 'translation', 'menu'
    ])),
  },
})

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default Page;