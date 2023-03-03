import React, { FC } from 'react';
import { CardMedia } from '@material-ui/core';

import { Props } from './types';

const imagePlaceholder = '/images/bcg.jpg';

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
