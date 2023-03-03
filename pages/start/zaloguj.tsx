import { LoginView } from './../../src/views/StarterView';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';

<LoginView />

export const getStaticProps: GetStaticProps<{}> = async ({
  locale
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'pl', [
      'signing',
    ])),
  },
})

export default LoginView;