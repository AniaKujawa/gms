import { Dashboard } from './../src/views/Dashboard';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';

<Dashboard />

export const getStaticProps: GetStaticProps<{}> = async ({
  locale
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'pl', [
      'dashboard',
    ])),
  },
})

export default Dashboard;