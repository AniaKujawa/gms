import React, { FC } from 'react';
import { Typography, Grid } from '@material-ui/core';

import { MusicianTags } from '../MusicianTags';
import { Props } from './types';
import { StyledImage, StyledRoot} from './Musician.styles';
import { MusicianImage } from '../MusicianImage';


export const MusicianMinimumInfo: FC<Props> = ({ musician, children }) => {

  return (
    <StyledRoot>
      <Typography variant="h2">{musician.name}</Typography>
      <StyledImage
        item
        md={6}
        lg={4}
      >
        <MusicianImage
          title={musician.name}
          imageUrl={musician.images[0]?.url}
        />
      </StyledImage>
      <MusicianTags tags={musician.tags} />
      {children}
    </StyledRoot>
  )
};
