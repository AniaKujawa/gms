import React from 'react';
import { useQuery } from 'react-query';
import { Card, CardMedia, Typography, Chip } from '@material-ui/core';

import { musicianClient } from './../../client/Musician';

export const MusiciansList = () => {
  const { data: musicians } = useQuery('musicians', musicianClient.getMusicians);

  return (
    <>
      <Typography variant="h2">Poznaj naszych wykonawców</Typography>
      {musicians && musicians.map(music => (
        <Card style={{
          margin: '10px',
          padding: '10px',
        }}>
          <Typography variant="h3">{music.name}</Typography>
          {music.imageUrl && (<CardMedia
            component="img"
            alt={music.name}
            image={music.imageUrl}
          />)}
          {music.tags.map(tag => (
            <Chip label={tag} />
          ))}
        </Card>
      ))}
    </>
  )
};
