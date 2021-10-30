import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Link } from '@material-ui/core';

import { Form } from './../../shared/Form';
import { Button } from './../../shared/Button';
import { useRegisterUser } from '../../../../queries/user';

import { RegisterFormProps, Props } from './types';
import { useStyles } from './RegisterForm.styles';

export const RegisterForm: FC<Props> = ({ setIsRegistered }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { handleSubmit, control, errors } = useForm<RegisterFormProps>({
    mode: 'onChange',
  });
  const { mutate } = useRegisterUser();
  const onSubmit = (data: RegisterFormProps) => mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <Controller
        name='firstName'
        control={control}
        rules={{
          required: `${t('signing.errors.blankName')}`
        }}
        defaultValue=''
        error={!!errors.firstName}
        render={(
          { onChange, value }
        )=> (
          <TextField
            label={t('signing.firstname')}
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
          required: `${t('signing.errors.blankLastName')}`
        }}
        defaultValue=''
        error={!!errors.lastName}
        render={(
          { onChange, value }
        )=> (
          <>
            <TextField
              label={t('signing.lastname')}
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
          required: `${t('signing.errors.blankUsername')}`
        }}
        defaultValue=''
        error={!!errors.username}
        render={(
          { onChange, value }
        )=> (
          <TextField
            label={t('signing.username')}
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
        {t('signing.register')}
      </Button>
      <Link
        onClick={() => setIsRegistered(true)}
        className={classes.link}
      >
        {t('signing.alreadyRegistered')}
      </Link>
    </form>
  )
};
