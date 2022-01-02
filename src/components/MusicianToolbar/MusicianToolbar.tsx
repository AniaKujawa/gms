import React, { FC } from 'react';
import { Button } from '@material-ui/core';

import { Toolbar } from '..';
import { Props } from './types';
import { useTranslation } from 'react-i18next';


export const MusicianToolbar: FC<Props> = ({ setIsEditing }) => {
  const { t } = useTranslation();

  return (
    <Toolbar>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setIsEditing(true)}
      >
        {t('profile.edit')}
      </Button>
    </Toolbar>
  )
};
