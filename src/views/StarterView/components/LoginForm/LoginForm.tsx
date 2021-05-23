import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Link } from '@material-ui/core';

import { Form } from '../../shared/Form';

import { LoginFormProps, Props } from './types';
import { useStyles } from './LoginForm.styles';

export const LoginForm: FC<Props> = ({ setIsRegistered }) => {
  const classes = useStyles();
  const { handleSubmit, control, errors } = useForm<LoginFormProps>({
    mode: 'onChange',
  });

  const onSubmit = (data: LoginFormProps) => {
    console.log('login', data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <Form control={control} errors={errors} />
      <Button
        type='submit'
      >
        Log in
      </Button>
      <Link onClick={() => setIsRegistered(false)}>
        Don't have an account? Register!
      </Link>
    </form>
  )
}