import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';

export const UnloggedMenu = () => {
  const { t } = useTranslation();

  return (
    <>
      <Button color="secondary" variant="outlined" href="/start">
        {t('joinUs')}
      </Button>
    </>
  )
};
