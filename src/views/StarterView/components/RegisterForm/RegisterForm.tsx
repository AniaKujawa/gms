import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { useForm, Controller } from 'react-hook-form';
import { TextField, FormControlLabel } from '@material-ui/core';
import { useRouter } from 'next/router';

import { Form } from './../../shared/Form';
import { Button } from './../../shared/Button';
import { useRegisterUser } from '../../../../queries/user';

import { RegisterFormProps } from './types';
import { StyledCheckbox, StyledForm, StyledLink } from './RegisterForm.styles';
import { PATHS } from '../../../../utils/consts';

export const RegisterForm: FC = () => {
  const t = useTranslations('signing');
  const { push } = useRouter();
  const { handleSubmit, control, errors } = useForm<RegisterFormProps>({
    mode: 'onChange',
  });
  const { mutate, isLoading } = useRegisterUser();
  const onSubmit = (data: RegisterFormProps) => mutate(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='firstName'
        control={control}
        defaultValue=''
        error={!!errors.firstName}
        render={(
          { onChange, value }
        )=> (
          <TextField
            label={t('firstname')}
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
              label={t('lastname')}
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
          required: `${t('errors.blankname')}`
        }}
        defaultValue=''
        error={!!errors.name}
        render={(
          { onChange, value }
        )=> (
          <TextField
            label={t('name')}
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
              <StyledCheckbox
                onChange={e => onChange(e.target.checked)}
                value={value}
                checked={value}
                color="primary"
              />
            }
            label={t('isMusicianLabel')}
          />
        )}
       />
      <Button
        type='submit'
        disabled={isLoading}
      >
        {isLoading ? t('loading') : t('register')}
      </Button>
      <StyledLink
        onClick={() => push(PATHS.LOGIN)}
      >
        {t('alreadyRegistered')}
      </StyledLink>
    </StyledForm>
  )
};
