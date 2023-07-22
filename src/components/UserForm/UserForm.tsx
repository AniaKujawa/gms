import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useUpdateUser } from '../../queries/user';

import { useStyles } from './UserForm.styles';
import { User, UpdateUser } from '../../types';
import { PATHS } from '../../utils/consts';

type Props = {
  user: User;
};

export const UserForm: FC<Props> = ({ user }) => {
  const classes = useStyles();
  const { t } = useTranslation(['signing', 'profile', 'translation']);
  const { push } = useRouter();
  const { handleSubmit, control, errors } = useForm<UpdateUser>({
    mode: 'onChange',
    defaultValues: user
  });
  const { mutate, isLoading } = useUpdateUser();
  const onSubmit = (data: UpdateUser) => mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
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
      <Box className={classes.buttons}>
        <Button
          variant="outlined"
          disabled={isLoading}
          color="primary"
          onClick={() => push(PATHS.PROFILE)}
        >
          {t('cancel')}
        </Button>
        <Button
          type='submit'
          disabled={isLoading}
          variant="contained"
          color="primary"
          className={classes.submitBtn}
        >
          {isLoading ? t('loading') : t('save')}
        </Button>
      </Box>
    </form>
  )
};
