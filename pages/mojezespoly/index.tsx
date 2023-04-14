import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';

import { BandList } from '../../src/views/BandList';
import { CheckAuthorization } from '../../src/routes/CheckAuthorization';
import { DashboardLayout } from './../../src/layout/DashboardLayout';

const BandListView = () =>
  <CheckAuthorization>
    <DashboardLayout>
      <BandList />
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

export default BandListView;