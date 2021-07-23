import React, { FC, createContext, useContext, useState } from 'react';
import noop from 'lodash/noop';

import { Alert as AlertType, FeedbackContextProps } from './types';

export const defaultAlert: AlertType = {
  isOpened: false,
  warningLevel: undefined,
  message: '',
};

const defaultContext: FeedbackContextProps = {
  alert: defaultAlert,
  setAlert: noop,
};

export const FeedbackContext = createContext<FeedbackContextProps>(defaultContext);

export const FeedbackContextProvider: FC = ({ children }) => {
  const [ alert, setAlert ] = useState(defaultAlert);
  // const setAlert = (warningLevel: Warning, message: string, isOpened = true) => setAlertValues({
  //   warningLevel,
  //   message,
  //   isOpened
  // })
  // const feedbackCtx = useMemo(() => ({ alert, setAlert }), [ alert ]);

  return (
    <FeedbackContext.Provider
      value={{
        alert,
        setAlert
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = () => {
  const context = useContext(FeedbackContext);

  if (context === undefined) {
    throw new Error('useFeedbackContext must be used within a FeedbackContextProvider');
  }

  return context;
};
