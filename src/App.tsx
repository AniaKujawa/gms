import { ThemeProvider } from '@material-ui/core';
import React, { FC, ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { SessionProvider } from 'next-auth/react';

import { theme } from './styles/theme';
import { PipeProviders } from './utils/PipeProviders';
import { UserContextProvider } from './context/User';
import { FeedbackContextProvider } from './context/Feedback';
import { client } from './client/UserQuery';
import { Routes } from './routes';
import { FeedbackAlert } from './shared/components/Feedback';
import { Loader } from './components';

const providers: FC<{ children: ReactNode }>[] = [
  FeedbackContextProvider,
  // UserContextProvider
  SessionProvider
];

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        <PipeProviders components={providers}>
          <BrowserRouter>
            <Suspense fallback={<Loader />}>
              <Routes />
              <FeedbackAlert />
            </Suspense>
          </BrowserRouter>
        </PipeProviders>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
