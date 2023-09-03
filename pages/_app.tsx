import React, { useState, ReactElement, ReactNode } from 'react';
import { ThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next'
import { appWithTranslation } from 'next-i18next'
import { QueryClient, QueryClientProvider } from 'react-query';
import nextI18NextConfig from '../next-i18next.config.js';
import { SessionProvider } from 'next-auth/react';

import { theme } from '../src/styles/theme';
import { UserContextProvider } from '../src/context/User';
import { FeedbackContextProvider } from '../src/context/Feedback';
import { FeedbackAlert } from '../src/shared/components/Feedback';
import { usePageLoading } from '../src/hooks/usePageLoading';
import { LoadingLayout } from '../src/layout/LoadingLayout';

import '../src/styles/global.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout || ((page) => page);
  const { isPageLoading } = usePageLoading();

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <UserContextProvider>
            <FeedbackContextProvider>
              {getLayout(
                <LoadingLayout isLoading={isPageLoading}>
                  <Component {...pageProps} />
                </LoadingLayout>)}
              <FeedbackAlert />
            </FeedbackContextProvider>
          </UserContextProvider>
        </QueryClientProvider>
      </ThemeProvider >
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
