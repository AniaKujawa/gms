import React, { FC, useState } from 'react';
import { Input, InputLabel, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { Props } from './Form.types';
import { useStyles } from './Form.styles';

export const Form: FC<Props> = ({ register }) => {
  const classes = useStyles();
  const [ showPassword, setShowPassword ] = useState(false);

  return (
    <>
      <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          required
          id="email"
          type='email'
          name='email'
          ref={register}
          // onChange={handleChange('email')}
        />
      <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          required
          id="password"
          type={showPassword ? 'text' : 'password'}
          ref={register}
          name='password'
          // onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(prev => !prev)}
                // onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
    </>
  )
};
