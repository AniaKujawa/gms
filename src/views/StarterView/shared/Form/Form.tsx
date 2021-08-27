import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Controller } from 'react-hook-form';
import { Input, InputLabel, InputAdornment, IconButton, TextField, FormHelperText, FormControl } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { Props } from './Form.types';
import { useStyles } from './Form.styles';

export const Form: FC<Props> = ({ control, errors }) => {
  const classes = useStyles();
  const [ showPassword, setShowPassword ] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <Controller
        name='email'
        control={control}
        rules={{
          required: `${t('signing.errors.blankEmail')}`,
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: `${t('signing.errors.invalidEmail')}`,
          }
        }}
        defaultValue=''
        error={!!errors.email}        
        render={(
          { onChange, value }
        )=> (
          <TextField
            label={t('signing.email')}
            type='text'
            onChange={onChange}
            value={value}
            helperText={errors?.email?.message}
          />
        )}
      />
      <Controller
        name='password'
        control={control}
        rules={{
          required: `${t('signing.errors.blankPassword')}`,
        }}
        defaultValue=''
        error={!!errors.password}
        render={(
          { onChange, value }
        )=> (
          <FormControl>
            <InputLabel htmlFor="password">{t('signing.password')}</InputLabel>
            <Input
              type={showPassword ? 'text' : 'password'}
              id='password'
              onChange={onChange}
              value={value}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(prev => !prev)}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>{errors?.password?.message}</FormHelperText>
          </FormControl>
        )}
      />
    </>
  )
};
