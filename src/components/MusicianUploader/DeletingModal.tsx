import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@material-ui/core';

import { Modal } from './../Modal';
import { ModalProps } from './types';
import { StyledDeletingButton, StyledModalActionsBox } from './DeletingModal.styles';


export const DeletingModal: FC<ModalProps> = ({ isModalOpen, handleClose, handleDelete }) => {
  const t = useTranslations(['musician', 'translation']);

  return (
    <Modal
      open={isModalOpen}
      handleClose={handleClose}
      title={t('musician:deleteImgTitle')}
      description={t('musician:deleteImgSubtitle')}
    >
      <StyledModalActionsBox>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClose}
        >
          {t('translation:cancel')}
        </Button>
        <StyledDeletingButton
          variant="contained"
          onClick={handleDelete}
        >
          {t('musician:deleteImgBtn')}
        </StyledDeletingButton>
      </StyledModalActionsBox>
    </Modal>
  );
};
