import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { Form } from './../../shared/Form';
import { Button } from './../../shared/Button';

import { PasswordRecover } from './components/PasswordRecover';
import { LoginFormProps } from './types';
import { useStyles } from './LoginForm.styles';
import { useLoginUser } from '../../../../queries/user';
import { PATHS } from '../../../../utils/consts';


export const LoginForm: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { push } = useHistory();
  const { handleSubmit, control, errors } = useForm<LoginFormProps>({
    mode: 'onChange',
  });
  const { mutate } = useLoginUser();
  const onSubmit = (data: LoginFormProps) => mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <Form control={control} errors={errors} />
      <Button
        type='submit'
      >
        {t('signing.loginButton')}
      </Button>
      <Link 
        onClick={() => push(PATHS.START)}
        className={classes.link}
      >
        {t('signing.firstTime')}
      </Link>
      <PasswordRecover control={control} emailErrors={errors.email} />
    </form>
  );
};
