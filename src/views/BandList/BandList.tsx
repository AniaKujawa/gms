import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

import { useGetMusicianBands } from '../../queries/musician';
import { useUserContext } from '../../context/User';
import { Musician } from '../../components';
import { MusicianListToolbar } from '../../components/MusicianListToolbar';
import { PATHS } from '../../utils/consts';

export const BandList: FC = () => {
  const { user } = useUserContext();
  const { data: bands } = useGetMusicianBands(user?.id)

  return (
    <Container>
      <MusicianListToolbar />
      {bands && (
        <div>
          {bands.map(band => (
            <Link key={band.id} to={`${PATHS.BANDS}/${band.id}`}>
              <Musician musician={band} />
            </Link>
          ))}
        </div>
      )}
    </Container>
  );
};
