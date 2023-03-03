import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Button, Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { PATHS } from '../../utils/consts';

import { MobileUnloggedMenu } from './MobileUnloggedMenu';
import { useStyles } from './UnloggedMenu.styles';

export const UnloggedMenu = () => {
  const theme = useTheme();
  const isWide = useMediaQuery(theme.breakpoints.up('sm'));
  const { t } = useTranslation(['signing', 'translation']);
  const classes = useStyles();

  return isWide ? (
    <Grid>
      <Button
        component={Link}
        color="secondary"
        variant="text"
        href={PATHS.LOGIN}
        className={classes.leftButton}
      >
        <Typography color="secondary" >
          {t('signing:login')}
        </Typography>
      </Button>
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
