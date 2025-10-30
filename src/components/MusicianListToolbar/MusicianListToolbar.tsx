import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../utils/consts';

import { Toolbar } from '..';


export const MusicianListToolbar: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Toolbar>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate(PATHS.CREATE_BAND)}
      >
        {t('musician.createBtn')}
      </Button>
    </Toolbar>
  )
};