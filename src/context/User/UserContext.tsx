import React, { ReactNode, useContext } from 'react';

import { UserContext as UserContextType } from './types';
import { useGetUser } from '../../queries/user';

const defaultContext = {
  user: null,
  isLoading: false,
};


const UserContext = React.createContext<UserContextType>(defaultContext);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const { data: user, isLoading } = useGetUser();

  return (
    <UserContext.Provider value={{
      user,
      isLoading,
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
