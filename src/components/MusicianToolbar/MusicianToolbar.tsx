import React, { FC, useCallback } from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { Toolbar } from '..';
import { Props } from './types';
import { useActivateMusicianBand, useDeactivateMusicianBand } from '../../queries/musician';

import { useStyles } from './MusicianToolbar.styles';


export const MusicianToolbar: FC<Props> = ({ setIsEditing, musician }) => {
  const { t } = useTranslation();
  const { mutate: activate } = useActivateMusicianBand();
  const { mutate: deactivate } = useDeactivateMusicianBand();
  const classes = useStyles({ active: musician.active });

  const handleActivation = useCallback(() => {
    if(musician.active) {
      return deactivate(musician.id);
    }
    return activate(musician.id);
  }, [musician, deactivate, activate]);

  return (
    <Toolbar>
      <Button
        variant="outlined"
        color="inherit"
        className={classes.activationBtn}
        onClick={handleActivation}
      >
        {musician.active ? t('profile.deactivate') : t('profile.activate')}
      </Button>
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
