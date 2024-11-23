import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

import { useRecoverPassword } from '../../../../../../queries/user';
import { useFeedback } from '../../../../../../hooks/useFeedback';
import { StyledLink } from './../../../RegisterForm/RegisterForm.styles';

import { Props } from './types';


export const PasswordRecover: FC<Props> = ({ control, emailErrors }) => {
  const t = useTranslations('signing');
  const { handleError } = useFeedback();

  const { mutate } = useRecoverPassword();

  const handleLostPassword = () => {
    const email = control.getValues('email');

    if(!email || emailErrors) {
      return handleError(new Error('errors.badEmailWhenLostPassword'));
    };

    mutate(email);    
  };

  return (
    <StyledLink 
      onClick={handleLostPassword}
    >
      {t('lostPassword')}
    </StyledLink>
  );
};