import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSession } from 'next-auth/react';

import { UserProfile } from '../../src/views/UserProfile';
import { DashboardLayout } from './../../src/layout/DashboardLayout';

const UserProfileView = () =>
  <DashboardLayout>
    <UserProfile />
  </DashboardLayout>

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
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
        'profile', 'signing', 'translation'
      ])),
    },
  };
}

export default UserProfileView;