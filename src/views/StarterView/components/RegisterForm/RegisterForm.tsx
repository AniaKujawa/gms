import React, { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Link } from '@material-ui/core';
import { useMutation, useQueryClient } from 'react-query';

import { Form } from './../../shared/Form';
import { Button } from './../../shared/Button';
import { useUserContext } from '../../../../context/User';
import { useFeedback } from '../../../../hooks/useFeedback';

import { RegisterFormProps, Props } from './types';
import { useStyles } from './RegisterForm.styles';

export const RegisterForm: FC<Props> = ({ setIsRegistered }) => {
  const classes = useStyles();
  const queryClient = useQueryClient();
  const { register } = useUserContext();
  const { handleError } = useFeedback();
  const { handleSubmit, control, errors } = useForm<RegisterFormProps>({
    mode: 'onChange',
  });

  const mutation = useMutation(register, {
    onSuccess: () => {
      queryClient.invalidateQueries('user')
    },
    onError: (err: Error) => handleError(err),
  });

  const onSubmit = (data: RegisterFormProps) => mutation.mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <Controller
        name='firstName'
        control={control}
        rules={{
          required: 'First name can not be blank'
        }}
        defaultValue=''
        error={!!errors.firstName}
        render={(
          { onChange, value }
        )=> (
          <TextField
            label='First name'
            type='text'
            onChange={onChange}
            value={value}
            helperText={errors?.firstName?.message}
          />
        )}
       />
      <Controller
        name='lastName'
        control={control}
        rules={{
          required: 'Last name can not be blank'
        }}
        defaultValue=''
        error={!!errors.lastName}
        render={(
          { onChange, value }
        )=> (
          <>
            <TextField
              label='Last name'
              type='text'
              onChange={onChange}
              value={value}
              helperText={errors?.lastName?.message}
            />
          </>
        )}
      />
      <Controller
        name='username'
        control={control}
        rules={{
          required: 'Username can not be blank'
        }}
        defaultValue=''
        error={!!errors.username}
        render={(
          { onChange, value }
        )=> (
          <TextField
            label='Username'
            type='text'
            onChange={onChange}
            value={value}
            helperText={errors?.username?.message}
          />
        )}
       />
      <Form control={control} errors={errors} />
      <Button
        type='submit'
      >
        Register
      </Button>
      <Link
        onClick={() => setIsRegistered(true)}
        className={classes.link}
      >
        Have you already registered? Log in
      </Link>
    </form>
  )
};
