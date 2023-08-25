"use client"
import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Grid, Icon } from '@material-ui/core';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { UserMenu } from '../UserMenu';
import { UnloggedMenu } from '../UnloggedMenu';

import { useStyles } from './Header.styles';

const PlFlagImg = '/images/poland-flag.svg';
const EnFlagImg = '/images/england-flag.svg';


export const Header = () => {
  const { status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();
  // const { pathname, asPath, query, locale } = router;
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Link href='/'>
        <Icon component='img' height='100%' src='violin.svg' />
      </Link>
      <Grid container alignItems="center" className={classes.menu}>
        {status === 'unauthenticated' && <UnloggedMenu />}
        <div
          onClick={() => {
            router.push(`${pathname}${query}`);
          }}
        >
          {locale === 'en' ? (
            <img src={PlFlagImg} alt="pl" className={classes.languageToggle} />
          ) : (<img src={EnFlagImg} alt="en" className={classes.languageToggle} />)}
        </div>
        {status === 'authenticated' && <UserMenu />}
      </Grid>
    </Grid>
  )
};
