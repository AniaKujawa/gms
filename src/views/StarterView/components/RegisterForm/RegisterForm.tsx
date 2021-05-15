import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormControl, Input, InputLabel } from '@material-ui/core';

import { Form } from '../../shared/Form';

import { RegisterFormProps } from './types'; 

export const RegisterForm: FC = () => {
  // const classes = useStyles();
  const { watch, handleSubmit, register } = useForm<RegisterFormProps>();

  const onSubmit = (data: RegisterFormProps) => {
    console.log(data);
  }

  watch('firstName');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputLabel htmlFor="firstName">First name</InputLabel>
        <Input
          required
          type='text'
          name='firstName'
          ref={register}
        />
      <InputLabel htmlFor="lastName">Last name</InputLabel>
        <Input
          required
          type='text'
          name='lastName'
          ref={register}
        />
        <Form register={register} />
    </form>
  )
}