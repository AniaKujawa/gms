import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@material-ui/core';
import { useMutation } from 'react-query';

import { useUserContext } from '../../../../../../context/User';
import { useFeedback } from '../../../../../../hooks/useFeedback';
import { useStyles } from './../../LoginForm.styles';

import { Props } from './types';


export const PasswordRecover: FC<Props> = ({ control, emailErrors }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { recoverPassword } = useUserContext();
  const { handleError, handleSuccess } = useFeedback();

  const mutation = useMutation(recoverPassword, {
    onSuccess: () => {
      handleSuccess('signing.lostPasswordSentEmail');
    },
    onError: (err: Error) => handleError(err),
  });

  const handleLostPassword = () => {
    const email = control.getValues('email');

    if(!email || emailErrors) {
      return handleError(new Error('signing.errors.badEmailWhenLostPassword'));
    };

    mutation.mutate(email);    
  };

  return (
    <Link 
      onClick={handleLostPassword}
      className={classes.link}
    >
      {t('signing.lostPassword')}
    </Link>
  );
};