import React, { useState, ReactElement, ReactNode } from 'react';
import { ThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next'
import { appWithTranslation } from 'next-i18next'
import { QueryClient, QueryClientProvider } from 'react-query';
import nextI18NextConfig from '../next-i18next.config.js';
import { SessionProvider } from 'next-auth/react';

// import { ReactQueryDevtools } from 'react-query/devtools';
import { theme } from '../src/styles/theme';
import { UserContextProvider } from '../src/context/User';
import { FeedbackContextProvider } from '../src/context/Feedback';
import { FeedbackAlert } from '../src/shared/components/Feedback';

import '../src/styles/global.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout || ((page) => page)

  return (
    // <CacheProvider value={clientSideEmotionCache}>
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <UserContextProvider>
            <FeedbackContextProvider>
              {getLayout(<Component {...pageProps} />)}
              <FeedbackAlert />
            </FeedbackContextProvider>
          </UserContextProvider>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </ThemeProvider >
    </SessionProvider>
    // </CacheProvider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
