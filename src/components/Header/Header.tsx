import React from 'react';
import { Grid, Icon } from '@material-ui/core';
import Link from 'next/link';

import { UserMenu } from '../UserMenu';
import { UnloggedMenu } from '../UnloggedMenu';
import { useUserContext } from './../../context/User';

import { useStyles } from './Header.styles';


export const Header = () => {
  const { isLoggedIn } = useUserContext();
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Link href='/'>
        <Icon component='img' height='100%' src='violin.svg' />
      </Link>
      {isLoggedIn ? <UserMenu /> : <UnloggedMenu />}
    </Grid>
  )
};
