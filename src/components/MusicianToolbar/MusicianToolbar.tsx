"use client"
import React, { FC, useCallback, useState } from 'react';
import { Button } from '@material-ui/core';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

import { Toolbar } from '..';
import { Modal } from './../Modal';
import { Props } from './types';
import { useActivateMusicianBand, useDeactivateMusicianBand } from '../../queries/musician';
import { PATHS } from '../../utils/consts';

import { StyledActivationButton, StyledDeactivationButton, StyledModalActionsBox } from './MusicianToolbar.styles';


export const MusicianToolbar: FC<Props> = ({ musician }) => {
  const t = useTranslations(['profile', 'translation']);
  const { push } = useRouter();
  const { mutate: activate } = useActivateMusicianBand();
  const { mutate: deactivate } = useDeactivateMusicianBand();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <StyledActivationButton
        variant="outlined"
        color="inherit"
        active={musician.active}
        onClick={handleActivation}
      >
        {musician.active ? t('deactivate') : t('activate')}
      </StyledActivationButton>
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
        <StyledModalActionsBox>
          <Button
            variant="outlined"
            color="primary"
            onClick={closeModal}
          >
            {t('translation:cancel')}
          </Button>
          <StyledDeactivationButton
            variant="contained"
            onClick={handleDeactivation}
          >
            {t('deactivate')}
          </StyledDeactivationButton>
        </StyledModalActionsBox>
      </Modal>

    </Toolbar>
  );
};
