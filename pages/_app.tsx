import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next'
import { QueryClient, QueryClientProvider } from 'react-query';
import nextI18NextConfig from '../next-i18next.config.js';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { theme } from '../src/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    // <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </ThemeProvider>
    // </CacheProvider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
