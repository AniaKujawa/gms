import React, { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Link } from '@material-ui/core';

import { Form } from './../../shared/Form';
import { Button } from './../../shared/Button';

import { RegisterFormProps, Props } from './types';
import { useStyles } from './RegisterForm.styles';

export const RegisterForm: FC<Props> = ({ setIsRegistered }) => {
  const classes = useStyles();
  const { handleSubmit, control, errors } = useForm<RegisterFormProps>({
    mode: 'onChange',
  });

  const onSubmit = (data: RegisterFormProps) => {
    console.log('register', data);
  }

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
