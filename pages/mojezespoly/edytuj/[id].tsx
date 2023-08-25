

import React, { ReactElement } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getSession } from '../../../lib/auth';
import { BandUpdate } from '../../../src/views/BandUpdate';
import { DashboardLayout } from '../../../src/layout/DashboardLayout';
import fetch from '../../../src/core/FetchService';
import { endpoints } from '../../../src/core/endpoints';
import { formatMusician } from '../../../src/client/Musician/formatter';

const Page = ({ musician }) => (
  <BandUpdate musician={musician} />
)

export async function getServerSideProps(context) {
  if (typeof context.query.id === 'string') {
    context.res.setHeader(
      'Cache-Control',
      'public, s-maxage=600, stale-while-revalidate=1200',
    );
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
      url: `${endpoints.bands}/${context.query.id}`,
      headers: {
        Authorization: `Bearer ${session.token}`
      },
    });

    const musician = formatMusician(data.data.band)


    return {
      props: {
        ...(await serverSideTranslations(context.locale ?? 'pl', [
          'profile', 'signing', 'translation'
        ])),
        musician,
      }
    }
  } else {
    throw new Error('Invalid type of musician id');
  }
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default Page;
