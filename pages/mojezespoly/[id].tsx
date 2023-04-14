import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';

import { BandProfile } from '../../src/views/BandProfile';
import { CheckAuthorization } from '../../src/routes/CheckAuthorization';
import { DashboardLayout } from './../../src/layout/DashboardLayout';
import { endpoints } from '../../src/core/endpoints';

const BandProfileView = () =>
  <CheckAuthorization>
    <DashboardLayout>
      <BandProfile />
    </DashboardLayout>
  </CheckAuthorization>

export async function getStaticPaths() {
  const res = await fetch(endpoints.userBands);
  const data = await res.json();
  const { bands } = data.data

  return {
    paths: bands.map((band) => ({
      params: { id: band.id.toString() },
    })),
    fallback: 'blocking',
  };
}

export const getStaticProps: GetStaticProps<{}> = async ({
  locale
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'pl', [
      'signing',
    ])),
  },
})

export default BandProfileView;