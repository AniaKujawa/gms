import React, { FC, useContext, useEffect, useState } from 'react';

import storage from './../../utils/storage';

import { UserContext as UserContextType } from './types';
import { useGetUser } from '../../queries/user';
import { noop } from 'lodash';

const defaultContext = {
  isLoggedIn: false,
  user: null,
  setIsLoggedIn: noop,
  logout: noop,
};

const getToken = () => storage.getItem('token');
const getUser = () => JSON.parse(storage.getItem('user') || '{}');

const UserContext = React.createContext<UserContextType>(defaultContext);

export const UserContextProvider: FC = ({ children }) => {
  const defaultIsLoggedInValue = Boolean(getToken());
  const userId = Number(getUser().id);
  const [ isLoggedIn, setIsLoggedIn ] = useState(defaultIsLoggedInValue);
  const { data: user } = useGetUser(userId);

  useEffect(() => {
    if(user?.id) {
      setIsLoggedIn(true);
    }
  }, [user, setIsLoggedIn]);

  const logout = () => {
    setIsLoggedIn(false);
    storage.removeItem('token');
    storage.removeItem('user');
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
