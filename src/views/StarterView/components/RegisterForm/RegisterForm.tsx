import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Link, Checkbox, FormControlLabel } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { Form } from './../../shared/Form';
import { Button } from './../../shared/Button';
import { useRegisterUser } from '../../../../queries/user';

import { RegisterFormProps } from './types';
import { useStyles } from './RegisterForm.styles';
import { PATHS } from '../../../../utils/consts';

export const RegisterForm: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { push } = useHistory();
  const { handleSubmit, control, errors } = useForm<RegisterFormProps>({
    mode: 'onChange',
  });
  const { mutate, isLoading } = useRegisterUser();
  const onSubmit = (data: RegisterFormProps) => mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <Controller
        name='firstName'
        control={control}
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
        name='name'
        control={control}
        rules={{
          required: `${t('signing.errors.blankname')}`
        }}
        defaultValue=''
        error={!!errors.name}
        render={(
          { onChange, value }
        )=> (
          <TextField
            label={t('signing.name')}
            type='text'
            onChange={onChange}
            value={value}
            helperText={errors?.name?.message}
          />
        )}
       />
      <Form control={control} errors={errors} />
      <Controller
        name='musician'
        control={control}
        defaultValue={false}
        error={!!errors.musician}
        render={(
          { onChange, value }
        )=> (
          <FormControlLabel
            control={
              <Checkbox
                onChange={e => onChange(e.target.checked)}
                value={value}
                checked={value}
                color="primary"
              />
            }
            label={t('signing.isMusicianLabel')}
            className={classes.checkbox}
          />
        )}
       />
      <Button
        type='submit'
        disabled={isLoading}
      >
        {isLoading ? t('loading') : t('signing.register')}
      </Button>
      <Link
        onClick={() => push(PATHS.LOGIN)}
        className={classes.link}
      >
        {t('signing.alreadyRegistered')}
      </Link>
    </form>
  )
};
