"use client"
import React, { FC, useCallback, useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { Toolbar } from '..';
import { Modal } from './../Modal';
import { Props } from './types';
import { useActivateMusicianBand, useDeactivateMusicianBand } from '../../queries/musician';
import { PATHS } from '../../utils/consts';

import { useStyles } from './MusicianToolbar.styles';


export const MusicianToolbar: FC<Props> = ({ musician }) => {
  const { t } = useTranslation(['profile', 'translation']);
  const { push } = useRouter();
  const { mutate: activate } = useActivateMusicianBand();
  const { mutate: deactivate } = useDeactivateMusicianBand();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const classes = useStyles({ active: musician.active });

  const closeModal = () => setIsModalOpen(false);

  const handleActivation = useCallback(() => {
    if (musician.active) {
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
        {musician.active ? t('deactivate') : t('activate')}
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => push(`${PATHS.BANDS_EDIT}/${musician.id}`)}
      >
        {t('edit')}
      </Button>

      <Modal
        open={isModalOpen}
        handleClose={closeModal}
        title={t('deactivationModalTitle')}
        description={t('deactivationModalSubtitle')}
      >
        <Box className={classes.modalActions}>
          <Button
            variant="outlined"
            color="primary"
            onClick={closeModal}
          >
            {t('translation:cancel')}
          </Button>
          <Button
            variant="contained"
            className={classes.deactivationBtn}
            onClick={handleDeactivation}
          >
            {t('deactivate')}
          </Button>
        </Box>
      </Modal>

    </Toolbar>
  );
};
