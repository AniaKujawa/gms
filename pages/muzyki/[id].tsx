import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { MusicView, MusicViewExtended } from '../../src/views/MusicView';
import { DashboardLayout } from '../../src/layout/DashboardLayout';
import { useUserContext } from '../../src/context/User';
import { endpoints } from '../../src/core/endpoints';
import { getSession } from 'next-auth/react';

const MusicianContentPage = () => {
  // const { isLoggedIn } = useUserContext();
  // const router = useRouter();

  // if (!isLoggedIn) {
  //   return <MusicView />
  // }

  return <MusicViewExtended />
}

const MusicianView = () =>
  <DashboardLayout>
    <MusicianContentPage />
  </DashboardLayout>

export async function getStaticPaths() {
  const res = await fetch(endpoints.bands);
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

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/start/zaloguj',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       ...(await serverSideTranslations(context.locale ?? 'pl', [
//         'profile', 'signing', 'translation'
//       ])),
//     },
//   };
// }

export default MusicianView;
