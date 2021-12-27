import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Button } from '@material-ui/core';

import { Props } from './types';


export const MusicianToolbar: FC<Props> = ({ setIsEditing }) => {
  const { t } = useTranslation();

 return (
  <Grid>
    <Button
      onClick={() => setIsEditing(true)}
    >
      {t('profile.edit')}
    </Button>
  </Grid>
 )
};
