import React, { FC } from 'react';
import { Loader } from '../components';


type Props = {
  isLoading: boolean;
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