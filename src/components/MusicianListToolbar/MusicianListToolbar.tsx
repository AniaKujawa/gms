import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { PATHS } from '../../utils/consts';

import { Toolbar } from '..';


export const MusicianListToolbar: FC = () => {
  const { t } = useTranslation();
  const { push } = useHistory();

  return (
    <Toolbar>
      <Button
        variant="contained"
        color="primary"
        onClick={() => push(PATHS.CREATE_BAND)}
      >
        {t('musician.createBtn')}
      </Button>
    </Toolbar>
  )
};