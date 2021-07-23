import React, { FC, useCallback } from 'react';
import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';
import { useFeedbackContext, defaultAlert } from './../../../context/Feedback';

export const FeedbackAlert: FC = () => {
  const { setAlert, alert } = useFeedbackContext();

  const handleClose = useCallback(() => {
    setAlert(defaultAlert);
  }, [ setAlert ]);

  return (
    alert.isOpened ? (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={alert.isOpened}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={alert.warningLevel}>
          {alert.message}
        </Alert>
      </Snackbar>
    ) : null
  );
};
