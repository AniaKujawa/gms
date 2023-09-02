import React, { ReactElement } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getSession } from '../../lib/auth';
import { BandList } from '../../src/views/BandList';
import { DashboardLayout } from './../../src/layout/DashboardLayout';
import { endpoints } from '../../src/core/endpoints';
import fetch from '../../src/core/FetchService';
import { formatMusicians } from '../../src/client/Musician/formatter';

const Page = ({ bands }) =>
  <BandList bands={bands} />


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

  const data = await fetch.get({
    url: endpoints.userBands,
    headers: {
      Authorization: `Bearer ${session.token}`
    },
  });

  const bands = formatMusicians(data.data.bands);

  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'pl', [
        'profile', 'signing', 'translation', 'menu', 'musician', 'apiErrors'
      ])),
      bands
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