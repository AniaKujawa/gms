import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Link } from '@material-ui/core';
import { useMutation, useQueryClient } from 'react-query';

import { Form } from './../../shared/Form';
import { Button } from './../../shared/Button';

import { LoginFormProps, Props } from './types';
import { useStyles } from './LoginForm.styles';
import { useUserContext } from '../../../../context/User';
import { useFeedback } from '../../../../hooks/useFeedback';


export const LoginForm: FC<Props> = ({ setIsRegistered }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { login } = useUserContext();
  const { handleError } = useFeedback();
  const { handleSubmit, control, errors } = useForm<LoginFormProps>({
    mode: 'onChange',
  });

  const mutation = useMutation(login, {
    onSuccess: () => {
      queryClient.invalidateQueries('user')
    },
    onError: (err: Error) => handleError(err),
  });

  const onSubmit = (data: LoginFormProps) => mutation.mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <Form control={control} errors={errors} />
      <Button
        type='submit'
      >
        {t('signing.loginButton')}
      </Button>
      <Link 
        onClick={() => setIsRegistered(false)}
        className={classes.link}
      >
        {t('signing.firstTime')}
      </Link>
    </form>
  );
};
