import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Toolbar } from '..';


export const MusicianListToolbar: FC = () => {
  const { t } = useTranslation();
  const { push } = useHistory();

  return (
    <Toolbar>
      <Button
        variant="contained"
        color="primary"
        onClick={() => push('mybands/create')}
      >
        {t('musician.createBtn')}
      </Button>
    </Toolbar>
  )
};