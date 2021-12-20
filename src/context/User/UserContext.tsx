import React, { FC, useContext, useEffect, useState } from 'react';

import storage from './../../utils/storage';

import { UserContext as UserContextType } from './types';
import { useGetUser } from '../../queries/user';
import { noop } from 'lodash';

const defaultContext = {
  isLoggedIn: false,
  user: {},
  setIsLoggedIn: noop,
  logout: noop,
};

const getToken = () => storage.getItem('token');

const UserContext = React.createContext<UserContextType>(defaultContext);

export const UserContextProvider: FC = ({ children }) => {
  const defaultIsLoggedInValue = Boolean(getToken());
  const [ isLoggedIn, setIsLoggedIn ] = useState(defaultIsLoggedInValue);
  const { data: user } = useGetUser();

  useEffect(() => {
    if(user?.data) {
      storage.setItem('token', user.data);
      setIsLoggedIn(true);
    }
  }, [user, setIsLoggedIn]);

  const logout = () => {
    setIsLoggedIn(false);
    storage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{
      isLoggedIn,
      user,
      setIsLoggedIn,
      logout,
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
