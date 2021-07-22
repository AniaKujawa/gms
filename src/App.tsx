import { ThemeProvider } from '@material-ui/core';
import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { theme } from './utils/theme';
import { UserContextProvider } from './context/User';
import { Routes } from './routes';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
