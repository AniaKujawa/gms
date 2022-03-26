import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

export const UnloggedMenu = () => {
  const { t } = useTranslation();

  return (
    <Button
      component={Link}
      color="secondary"
      variant="outlined"
      to="/start"
    > 
      <Typography color="secondary" >
        {t('translation.joinUs')}
      </Typography>
    </Button>
  )
};
