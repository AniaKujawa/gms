import { useUserContext } from '../context/User';
import { PATHS } from './../utils/consts';
import { useRouter } from 'next/router';
import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const CheckAuthorization: FC<Props> = ({ children }) => {
  const { isLoggedIn } = useUserContext();
  const router = useRouter();

  if (!isLoggedIn) {
    if (typeof window !== 'undefined') {
      router.push(PATHS.LOGIN);
    }
    return null
  }

  return <>{children}</>
}