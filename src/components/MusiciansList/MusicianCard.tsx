"use client"
import React, { FC } from 'react';
import { redirect } from 'next/navigation'
import { Typography } from '@material-ui/core';

import { PATHS } from '../../utils/consts';
import { StyledCard, StyledImage } from './../Musician/Musician.styles';
import { MusicianTags } from './../MusicianTags';
import { MusicianImage } from './../MusicianImage';
import { Props } from './types';

export const MusicianCard: FC<Props> = ({ musician }) => {

  return (
    <StyledCard
      onClick={() => redirect(`${PATHS.MUSIC}/${musician.id}`)}
    >
      <Typography variant="h3">{musician.name}</Typography>
      <StyledImage
      >
        <MusicianImage
          title={musician.name}
          imageUrl={musician.images[0]?.url}
        />
      </StyledImage>
      <MusicianTags tags={musician.tags} />
    </StyledCard>
  );
};
