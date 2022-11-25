import React, { FC } from 'react';
import { CardMedia } from '@material-ui/core';

import imagePlaceholder from './../../assets/bcg.jpg';
import { Props } from './types';

export const MusicianImage: FC<Props> = ({ title, imageUrl }) => {
  return (
    <CardMedia
      height={300}
      component="img"
      alt={title}
      image={imageUrl ? imageUrl : imagePlaceholder}
    />
  );
};
