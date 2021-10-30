import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@material-ui/core';

import { useRecoverPassword } from '../../../../../../queries/user';
import { useFeedback } from '../../../../../../hooks/useFeedback';
import { useStyles } from './../../LoginForm.styles';

import { Props } from './types';


export const PasswordRecover: FC<Props> = ({ control, emailErrors }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { handleError } = useFeedback();

  const { mutate } = useRecoverPassword();

  const handleLostPassword = () => {
    const email = control.getValues('email');

    if(!email || emailErrors) {
      return handleError(new Error('signing.errors.badEmailWhenLostPassword'));
    };

    mutate(email);    
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