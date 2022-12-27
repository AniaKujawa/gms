import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useUpdateUser } from '../../queries/user';

import { useStyles } from './UserForm.styles';
import { User, UpdateUser } from '../../types';
import { PATHS } from '../../utils/consts';

type Props = {
  user: User;
};

export const UserForm: FC<Props> = ({ user }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { push } = useHistory();
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
       <Box className={classes.buttons}>
        <Button
          variant="outlined"
          disabled={isLoading}            
          color="primary"
          onClick={() => push(PATHS.PROFILE)}
        >
          {t('translation.cancel')}
        </Button>
        <Button
          type='submit'
          disabled={isLoading}
          variant="contained"
          color="primary"
          className={classes.submitBtn}
        >
          {isLoading ? t('loading') : t('profile.save')}
        </Button>
       </Box>
    </form>
  )
};
