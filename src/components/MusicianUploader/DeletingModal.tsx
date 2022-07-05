import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button } from '@material-ui/core';

import { Modal } from './../Modal';
import { ModalProps } from './types';
import { useStyles } from './DeletingModal.styles';


export const DeletingModal: FC<ModalProps> = ({ isModalOpen, handleClose, handleDelete }) => {
  const  { t } = useTranslation();
  const classes = useStyles();

  return (
    <Modal
      open={isModalOpen}
      handleClose={handleClose}
      title={t('musician.deleteImgTitle')}
      description={t('musician.deleteImgSubtitle')}
    >
      <Box className={classes.modalActions}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClose}
        >
          {t('translation.cancel')}
        </Button>
        <Button
          variant="contained"
          className={classes.deletingBtn}
          onClick={handleDelete}
        >
          {t('musician.deleteImgBtn')}
        </Button>
      </Box>
    </Modal>
  );
};
