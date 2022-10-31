import React from 'react';
import { Avatar as MuiAvatar, AvatarProps } from '@material-ui/core';


const formatAvatarString = (text: string) => {
  return text.split(' ').map(word => word.substring(0, 1).toUpperCase()).join('');
}

export const Avatar = ({ children, ...props }: AvatarProps) => {
  return (
    <MuiAvatar {...props}>
      {typeof children === 'string' ? formatAvatarString(children) : children}
    </MuiAvatar>
  )
}