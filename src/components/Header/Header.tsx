"use client"
import React from 'react';
import { useRouter } from 'next/router';
import { Grid, Icon } from '@material-ui/core';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { UserMenu } from '../UserMenu';
import { UnloggedMenu } from '../UnloggedMenu';

import { StyledAppBar, StyledToolbar, StyledLanguageToggle } from './Header.styles';

const PlFlagImg = '/images/poland-flag.svg';
const EnFlagImg = '/images/england-flag.svg';


export const Header = () => {
  const { status } = useSession();
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <Link href='/'>
          <Icon component='img' height='100%' src='violin.svg' />
        </Link>
        <Grid container alignItems="center">
          {status === 'unauthenticated' && <UnloggedMenu />}
          <div
            onClick={() => {
              router.push({ pathname, query }, asPath, { locale: locale === 'en' ? 'pl' : 'en' });
            }}
          >
            {locale === 'en' ? (
              <StyledLanguageToggle src={PlFlagImg} alt="pl" />
            ) : (<StyledLanguageToggle src={EnFlagImg} alt="en" />)}
          </div>
          {status === 'authenticated' && <UserMenu />}
        </Grid>
      </StyledToolbar>
    </StyledAppBar>
  )
};
