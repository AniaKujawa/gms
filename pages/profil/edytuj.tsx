import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';

import { UserProfileUpdate } from '../../src/views/UserProfileUpdate';
import { CheckAuthorization } from '../../src/routes/CheckAuthorization';
import { DashboardLayout } from './../../src/layout/DashboardLayout';

const UserProfileUpdateView = () =>
  <CheckAuthorization>
    <DashboardLayout>
      <UserProfileUpdate />
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

export default UserProfileUpdateView;