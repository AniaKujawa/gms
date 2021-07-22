import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from '@material-ui/core';

import { Form } from './../../shared/Form';
import { Button } from './../../shared/Button';
import { userClient } from '../../../../client/User';

import { LoginFormProps, Props } from './types';
import { useStyles } from './LoginForm.styles';

export const LoginForm: FC<Props> = ({ setIsRegistered }) => {
  const classes = useStyles();
  const { handleSubmit, control, errors } = useForm<LoginFormProps>({
    mode: 'onChange',
  });

  const onSubmit = async(data: LoginFormProps) => {
    console.log('login', data);
    await userClient.getUsers();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <Form control={control} errors={errors} />
      <Button
        type='submit'
      >
        Log in
      </Button>
      <Link 
        onClick={() => setIsRegistered(false)}
        className={classes.link}
      >
        Don't have an account? Register!
      </Link>
    </form>
  );
};
