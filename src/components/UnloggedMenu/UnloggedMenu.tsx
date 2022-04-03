import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
import { PATHS } from '../../utils/consts';

import { useStyles } from './UnloggedMenu.styles';

export const UnloggedMenu = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Grid>
      <Button
        component={Link}
        color="secondary"
        variant="text"
        to={PATHS.LOGIN}
        className={classes.leftButton}
      > 
        <Typography color="secondary" >
          {t('signing.login')}
        </Typography>
      </Button>
      <Button
        component={Link}
        color="secondary"
        variant="outlined"
        to={PATHS.START}
      > 
        <Typography color="secondary" >
          {t('translation.joinUs')}
        </Typography>
      </Button>
    </Grid>
  )
};
