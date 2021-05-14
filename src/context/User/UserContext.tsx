import React, { FC, useContext, useState } from 'react';

const defaultContext = {
  isLoggedIn: false,
  user: {},
}

const UserContext = React.createContext(defaultContext);

export const UserContextProvider: FC = ({ children }) => {
  const [ user, setUser ] = useState(defaultContext.user);
  const [ isLoggedIn, setIsLoggedIn ] = useState(defaultContext.isLoggedIn);

  return (
    <UserContext.Provider value={{ isLoggedIn, user }}>
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
