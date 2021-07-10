import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { UserContextProvider } from './context/User';
import { Routes } from './routes';

const App: FC = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
