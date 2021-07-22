import React, { FC, useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import noop from 'lodash/noop';

import { userClient } from './../../client/User';

import { UserContext as UserContextType } from './types';

const defaultContext = {
  isLoggedIn: false,
  user: {},
  login: noop,
  register: noop,
};

const UserContext = React.createContext<UserContextType>(defaultContext);

export const UserContextProvider: FC = ({ children }) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(defaultContext.isLoggedIn);
  const { data: user } = useQuery('user', userClient.getUser);

  useEffect(() => {
    if(user?.data) {
      setIsLoggedIn(true);
    }
  }, [user, setIsLoggedIn]);

  return (
    <UserContext.Provider value={{
      isLoggedIn,
      user,
      login: userClient.loginUser,
      register: userClient.registerUser,
    }}>
      {children}
    </UserContext.Provider>
  )
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }

  return context;
};
