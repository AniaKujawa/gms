import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from '@material-ui/core';
import { useMutation, useQueryClient } from 'react-query';

import { Form } from './../../shared/Form';
import { Button } from './../../shared/Button';

import { LoginFormProps, Props } from './types';
import { useStyles } from './LoginForm.styles';
import { useUserContext } from '../../../../context/User';

export const LoginForm: FC<Props> = ({ setIsRegistered }) => {
  const classes = useStyles();
  const queryClient = useQueryClient();
  const { login } = useUserContext();
  const { handleSubmit, control, errors } = useForm<LoginFormProps>({
    mode: 'onChange',
  });

  const mutation = useMutation(login, {
    onSuccess: () => {
      queryClient.invalidateQueries('user')
    },
  })

  const onSubmit = async(data: LoginFormProps) => {
    console.log('login', data);
    try {
      await mutation.mutate(data);
    } catch (err) {
      console.log(err);
    }
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
