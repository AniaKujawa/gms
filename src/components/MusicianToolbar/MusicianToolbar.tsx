import React, { FC, useCallback, useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { Toolbar } from '..';
import { Modal } from './../Modal';
import { Props } from './types';
import { useActivateMusicianBand, useDeactivateMusicianBand } from '../../queries/musician';

import { useStyles } from './MusicianToolbar.styles';


export const MusicianToolbar: FC<Props> = ({ setIsEditing, musician }) => {
  const { t } = useTranslation();
  const { mutate: activate } = useActivateMusicianBand();
  const { mutate: deactivate } = useDeactivateMusicianBand();
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const classes = useStyles({ active: musician.active });

  const closeModal = () => setIsModalOpen(false);

  const handleActivation = useCallback(() => {
    if(musician.active) {
      return setIsModalOpen(true);
    }
    return activate(musician.id);
  }, [musician, activate]);

  const handleDeactivation = useCallback(() => {
    deactivate(musician.id);
    return setIsModalOpen(false);
  }, [musician, deactivate]);

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

      <Modal
        open={isModalOpen}
        handleClose={closeModal}
        title={t('profile.deactivationModalTitle')}
        description={t('profile.deactivationModalSubtitle')}
      >
        <Box className={classes.modalActions}>
          <Button
            variant="outlined"
            color="primary"
            onClick={closeModal}
          >
            {t('translation.cancel')}
          </Button>
          <Button
            variant="contained"
            className={classes.deactivationBtn}
            onClick={handleDeactivation}
          >
            {t('profile.deactivate')}
          </Button>
        </Box>
      </Modal>

    </Toolbar>
  );
};
