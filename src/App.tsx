import { ThemeProvider } from '@material-ui/core';
import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';

import { theme } from './utils/theme';
import { UserContextProvider } from './context/User';
import { client } from './client/UserQuery';
import { Routes } from './routes';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        <UserContextProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </UserContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
