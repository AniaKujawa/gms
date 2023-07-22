import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { Link } from '@material-ui/core';
import { useRouter } from 'next/router';
import { signIn, useSession } from "next-auth/react";

import { Form } from './../../shared/Form';
import { Button } from './../../shared/Button';

import { PasswordRecover } from './components/PasswordRecover';
import { LoginFormProps } from './types';
import { useStyles } from './LoginForm.styles';
import { PATHS } from '../../../../utils/consts';


export const LoginForm: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('signing');
  const { push } = useRouter();
  const { handleSubmit, control, errors } = useForm<LoginFormProps>({
    mode: 'onChange',
  });
  const { status } = useSession();
  const onSubmit = (data: LoginFormProps) => signIn("credentials", { ...data, callbackUrl: '/' });
  const isLoading = status === 'loading';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <Form control={control} errors={errors} />
      <Button
        type='submit'
        disabled={isLoading}
      >
        {isLoading ? t('loading') : t('loginButton')}
      </Button>
      <Link
        onClick={() => push(PATHS.START)}
        className={classes.link}
      >
        {t('firstTime')}
      </Link>
      <PasswordRecover control={control} emailErrors={errors.email} />
    </form>
  );
};
