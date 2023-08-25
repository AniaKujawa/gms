import React, { ReactElement } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getSession } from '../../lib/auth';
import { BandList } from '../../src/views/BandList';
import { DashboardLayout } from './../../src/layout/DashboardLayout';

const Page = () =>
  <BandList/>


export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session?.token) {
    return {
      redirect: {
        destination: '/start/zaloguj',
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'pl', [
        'profile', 'signing', 'translation', 'menu'
      ])),
    },
  };
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default Page;