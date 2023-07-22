import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next'
import { QueryClient, QueryClientProvider } from 'react-query';
import nextI18NextConfig from '../next-i18next.config.js';
import { SessionProvider } from 'next-auth/react';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { theme } from '../src/styles/theme';
import { UserContextProvider } from '../src/context/User';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    // <CacheProvider value={clientSideEmotionCache}>

    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <UserContextProvider>
            <Component {...pageProps} />
          </UserContextProvider>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </SessionProvider>
      </QueryClientProvider>
    </ThemeProvider >
    // </CacheProvider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
