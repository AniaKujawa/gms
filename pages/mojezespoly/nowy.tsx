import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';

import { BandCreation } from '../../src/views/BandCreation';
import { CheckAuthorization } from '../../src/routes/CheckAuthorization';
import { DashboardLayout } from './../../src/layout/DashboardLayout';

const BandCreationView = () =>
  <CheckAuthorization>
    <DashboardLayout>
      <BandCreation />
    </DashboardLayout>
  </CheckAuthorization>

export const getStaticProps: GetStaticProps<{}> = async ({
  locale
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'pl', [
      'signing',
    ])),
  },
})

export default BandCreationView;