import { ThemeProvider } from '@material-ui/core';
import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';

import { theme } from './utils/theme';
import { UserContextProvider } from './context/User';
import { FeedbackContextProvider } from './context/Feedback';
import { client } from './client/UserQuery';
import { Routes } from './routes';
import { FeedbackAlert } from './shared/components/Feedback';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <FeedbackContextProvider>
        <QueryClientProvider client={client}>
          <UserContextProvider>
            <BrowserRouter>
              <Routes />
              <FeedbackAlert />
            </BrowserRouter>
          </UserContextProvider>
        </QueryClientProvider>
      </FeedbackContextProvider>
    </ThemeProvider>
  );
}

export default App;
