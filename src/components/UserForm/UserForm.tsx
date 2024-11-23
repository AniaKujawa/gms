"use client"
import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useUpdateUser } from '../../queries/user';

import { User, UpdateUser } from '../../types';
import { PATHS } from '../../utils/consts';
import { ButtonContainer, StyledForm, SubmitButton } from './UserForm.styles';

type Props = {
  user: User;
};

export const UserForm: FC<Props> = ({ user }) => {
  const t = useTranslations(['signing', 'profile', 'translation']);
  const { push } = useRouter();
  const { handleSubmit, control, errors } = useForm<UpdateUser>({
    mode: 'onChange',
    defaultValues: user
  });
  const { mutate, isLoading } = useUpdateUser();
  const onSubmit = (data: UpdateUser) => mutate(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='firstName'
        control={control}
        defaultValue=''
        error={!!errors.firstName}
        render={(
          { onChange, value }
        ) => (
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
        ) => (
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
        ) => (
          <TextField
            label={t('name')}
            type='text'
            onChange={onChange}
            value={value}
            helperText={errors?.name?.message}
          />
        )}
      />
      <ButtonContainer>
        <Button
          variant="outlined"
          disabled={isLoading}
          color="primary"
          onClick={() => push(PATHS.PROFILE)}
        >
          {t('cancel')}
        </Button>
        <SubmitButton
          type='submit'
          disabled={isLoading}
          variant="contained"
          color="primary"
          className={classes.submitBtn}
        >
          {isLoading ? t('loading') : t('save')}
        </SubmitButton>
      </ButtonContainer>
    </StyledForm>
  )
};
