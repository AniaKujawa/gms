import { Dashboard } from './../src/views/Dashboard';
import { DashboardLayout } from './../src/layout/DashboardLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';

const DashboardView = () => (
  <DashboardLayout>
    <Dashboard />
  </DashboardLayout>
)

export const getStaticProps: GetStaticProps<{}> = async ({
  locale
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'pl', [
      'dashboard', 'signing', 'translation', 'menu'
    ])),
  },
})

export default DashboardView;