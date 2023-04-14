import React, { FC, ReactNode } from 'react';
import { Loader } from '../components';


type Props = {
  isLoading: boolean;
  children: ReactNode;
};

export const LoadingLayout: FC<Props> = ({ children, isLoading }) => (
  isLoading ? (
    <Loader />
  ) : (
    <>
      {children}
    </>
  )
);