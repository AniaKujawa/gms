import React, { FC, useState } from 'react';
import { Controller } from 'react-hook-form';
import { Input, InputLabel, InputAdornment, IconButton, TextField, FormHelperText, FormControl } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { Props } from './Form.types';
import { useStyles } from './Form.styles';

export const Form: FC<Props> = ({ control, errors }) => {
  const classes = useStyles();
  const [ showPassword, setShowPassword ] = useState(false);

  return (
    <>
      <Controller
        name='email'
        control={control}
        rules={{
          required: 'Email can not be blank',
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'Invalid email address',
          }
        }}
        defaultValue=''
        error={!!errors.email}        
        render={(
          { onChange, value }
        )=> (
          <TextField
            label='Email'
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
          required: 'Password can not be blank',
          minLength: {
            value: 8,
            message: 'Must have at least 8 characters'
          }
        }}
        defaultValue=''
        error={!!errors.password}
        render={(
          { onChange, value }
        )=> (
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
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
