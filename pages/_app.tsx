import React, { useState, ReactElement, ReactNode } from 'react';
import { ThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NextIntlClientProvider } from 'next-intl';
import {getMessages} from 'next-intl/server';
import { SessionProvider } from 'next-auth/react';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import { theme } from '../src/styles/theme';
import { UserContextProvider } from '../src/context/User';
import { FeedbackContextProvider } from '../src/context/Feedback';
import { FeedbackAlert } from '../src/shared/components/Feedback';
// import { usePageLoading } from '../src/hooks/usePageLoading';
// import { LoadingLayout } from '../src/layout/LoadingLayout';

import '../src/styles/global.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
async function ComponentWithTranslation({ children }: { children: ReactNode }) {
  const messages = await getMessages();

  console.log(messages);
 
  return (
    <NextIntlClientProvider messages={messages} locale='pl' timeZone={timezone}>
      {children}
    </NextIntlClientProvider>
  );
}

const timezone = 'Europe/Warsaw';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient());
  // const getLayout = Component.getLayout || ((page) => page);
  // const { isPageLoading } = usePageLoading();

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <NextIntlClientProvider locale='pl' timeZone={timezone}>
          <QueryClientProvider client={queryClient}>
            {/* <UserContextProvider> */}
              <FeedbackContextProvider>
                {/* {getLayout(
                  <LoadingLayout isLoading={isPageLoading}> */}
                    {/* <ComponentWithTranslation> */}
                      <Component {...pageProps} />
                    {/* </ComponentWithTranslation> */}
                  {/* </LoadingLayout>)} */}
                <FeedbackAlert />
              </FeedbackContextProvider>
            {/* </UserContextProvider> */}
          </QueryClientProvider>
        </NextIntlClientProvider>
      </ThemeProvider >
    </SessionProvider>
  );
}

export default MyApp;
