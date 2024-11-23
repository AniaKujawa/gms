"use client"
import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button, Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { signIn } from "next-auth/react";
import { PATHS } from '../../utils/consts';

import { MobileUnloggedMenu } from './MobileUnloggedMenu';
import { LeftButton } from './UnloggedMenu.styles';

export const UnloggedMenu = () => {
  const theme = useTheme();
  const isWide = useMediaQuery(theme.breakpoints.up('sm'));
  const t = useTranslations(['signing', 'translation']);

  return isWide ? (
    <Grid>
      <LeftButton
        variant="contained"
        color="primary"
        onClick={() => signIn(undefined, { callbackUrl: '/' })}
      >
        <Typography color="secondary" >
          {t('signing:login')}
        </Typography>
      </LeftButton>
      <Button
        component={Link}
        color="secondary"
        variant="outlined"
        href={PATHS.START}
      >
        <Typography color="secondary" >
          {t('translation:joinUs')}
        </Typography>
      </Button>
    </Grid >
  ) : (
    <MobileUnloggedMenu />
  )
};
