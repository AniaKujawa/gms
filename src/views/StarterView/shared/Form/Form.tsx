import React, { FC, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Controller } from 'react-hook-form';
import { Input, InputLabel, InputAdornment, IconButton, TextField, FormHelperText, FormControl } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { Props } from './Form.types';


export const Form: FC<Props> = ({ control, errors }) => {
  const [ showPassword, setShowPassword ] = useState(false);
  const { t } = useTranslation('signing');

  return (
    <>
      <Controller
        name='email'
        control={control}
        rules={{
          required: `${t('errors.blankEmail')}`,
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: `${t('errors.invalidEmail')}`,
          }
        }}
        defaultValue=''
        error={!!errors.email}        
        render={(
          { onChange, value }
        ) => (
          <TextField
            label={t('email')}
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
          required: `${t('errors.blankPassword')}`,
          minLength: {
            value: 6,
            message: t('errors.minLengthPassword')
          }
        }}
        defaultValue=''
        error={!!errors.password}
        render={(
          { onChange, value }
        )=> (
          <FormControl>
            <InputLabel htmlFor="password">{t('password')}</InputLabel>
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
