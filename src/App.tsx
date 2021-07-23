import { ThemeProvider } from '@material-ui/core';
import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';

import { theme } from './utils/theme';
import { PipeProviders } from './utils/PipeProviders';
import { UserContextProvider } from './context/User';
import { FeedbackContextProvider } from './context/Feedback';
import { client } from './client/UserQuery';
import { Routes } from './routes';
import { FeedbackAlert } from './shared/components/Feedback';

const providers: FC[] = [
  FeedbackContextProvider,
  UserContextProvider
];

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>,
        <PipeProviders components={providers}>
          <BrowserRouter>
            <Routes />
            <FeedbackAlert />
          </BrowserRouter>
        </PipeProviders>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
