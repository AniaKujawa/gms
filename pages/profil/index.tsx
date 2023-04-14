import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';

import { UserProfile } from '../../src/views/UserProfile';
import { CheckAuthorization } from '../../src/routes/CheckAuthorization';
import { DashboardLayout } from './../../src/layout/DashboardLayout';

const UserProfileView = () =>
  <CheckAuthorization>
    <DashboardLayout>
      <UserProfile />
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

export default UserProfileView;