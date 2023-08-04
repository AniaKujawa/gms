import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Card, Typography, Grid } from '@material-ui/core';

import { PATHS } from '../../utils/consts';
import { useStyles } from './../Musician/Musician.styles';
import { MusicianTags } from './../MusicianTags';
import { MusicianImage } from './../MusicianImage';
import { Props } from './types';

export const MusicianCard: FC<Props> = ({ musician }) => {
  const classes = useStyles();
  const { push } = useRouter();

  return (
    <Card
      className={classes.card}
      onClick={() => push(`${PATHS.MUSIC}/${musician.id}`)}
    >
      <Typography variant="h3">{musician.name}</Typography>
      <Grid
        className={classes.image}
      >
        <MusicianImage
          title={musician.name}
          imageUrl={musician.images[0]?.url}
        />
      </Grid>
      <MusicianTags tags={musician.tags} />
    </Card>
  );
};
