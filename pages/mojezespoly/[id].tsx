import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps, GetStaticProps } from 'next';
import request, { AxiosPromise, AxiosRequestConfig } from 'axios';

import { BandProfile } from '../../src/views/BandProfile';
import { CheckAuthorization } from '../../src/routes/CheckAuthorization';
import { DashboardLayout } from './../../src/layout/DashboardLayout';
import { endpoints } from '../../src/core/endpoints';
import { Musician } from '../../src/types';
import { musicianClient } from '../../src/client/Musician';

const BandProfileView = ({ musician }) =>
  // <CheckAuthorization>
  <DashboardLayout>
    <BandProfile musician={musician} />
  </DashboardLayout>
// </CheckAuthorization>


export const getServerSideProps: GetServerSideProps<{
  musician: Musician
}> = async (context) => {
  if (typeof context.query.id === 'string') {
    context.res.setHeader(
      'Cache-Control',
      'public, s-maxage=600, stale-while-revalidate=1200',
    );

    const musician = await musicianClient.getServerMusician(context.query.id);

    console.log(musician);

    return {
      props: {
        ...(await serverSideTranslations(context.locale ?? 'pl', [
          'profile', 'translation'
        ])),
        musician
      }
    }
  } else {
    throw new Error('Invalid type of musician id');
  }
};

// export async function getStaticPaths() {
//   const res = await fetch(endpoints.userBands);
//   const data = await res.json();
//   const { bands } = data.data

//   return {
//     paths: bands.map((band) => ({
//       params: { id: band.id.toString() },
//     })),
//     fallback: 'blocking',
//   };
// }

// export const getStaticProps: GetStaticProps<{}> = async ({
//   locale
// }) => ({
//   props: {
//     ...(await serverSideTranslations(locale ?? 'pl', [
//       'signing',
//     ])),
//   },
// })

export default BandProfileView;