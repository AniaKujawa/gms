import React, { FC, useContext, useEffect, useState } from 'react';

import storage from './../../utils/storage';

import { UserContext as UserContextType } from './types';
import { useGetUser } from '../../queries/user';

const defaultContext = {
  isLoggedIn: false,
  user: {},
};

const UserContext = React.createContext<UserContextType>(defaultContext);

export const UserContextProvider: FC = ({ children }) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(defaultContext.isLoggedIn);
  const { data: user } = useGetUser();

  useEffect(() => {
    if(user?.data) {
      storage.setItem('token', user.data);
      setIsLoggedIn(true);
    }
  }, [user, setIsLoggedIn]);

  return (
    <UserContext.Provider value={{
      isLoggedIn,
      user,
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
