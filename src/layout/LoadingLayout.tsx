import React, { FC } from 'react';
import { GlobalLoader } from '../views/GlobalLoader';


type Props = {
  isLoading: boolean;
};

export const LoadingLayout: FC<Props> = ({ children, isLoading }) => (
  isLoading ? (
    <GlobalLoader/>
  ) : (
    <>
      {children}
    </>
  )
);