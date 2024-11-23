import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { signIn, useSession } from "next-auth/react";

import { Form } from './../../shared/Form';
import { Button } from './../../shared/Button';

import { PasswordRecover } from './components/PasswordRecover';
import { LoginFormProps } from './types';
import { StyledForm } from './LoginForm.styles';
import { PATHS } from '../../../../utils/consts';
import { StyledLink } from '../RegisterForm/RegisterForm.styles';


export const LoginForm: FC = () => {
  const t = useTranslations('signing');
  const { push } = useRouter();
  const { handleSubmit, control, errors } = useForm<LoginFormProps>({
    mode: 'onChange',
  });
  const { status } = useSession();
  const onSubmit = (data: LoginFormProps) => signIn("credentials", { ...data, callbackUrl: '/' });
  const isLoading = status === 'loading';

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Form control={control} errors={errors} />
      <Button
        type='submit'
        disabled={isLoading}
      >
        {isLoading ? t('loading') : t('loginButton')}
      </Button>
      <StyledLink
        onClick={() => push(PATHS.START)}
      >
        {t('firstTime')}
      </StyledLink>
      <PasswordRecover control={control} emailErrors={errors.email} />
    </StyledForm>
  );
};
