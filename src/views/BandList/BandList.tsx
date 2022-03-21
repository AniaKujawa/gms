import React, { FC } from 'react';
import { useGetMusicianBands } from '../../queries/musician';
import { useUserContext } from '../../context/User';
import { Musician } from '../../components';

export const BandList: FC = () => {
  const { user } = useUserContext();
  const { data: bands } = useGetMusicianBands(user?.id)

  return (
    bands ? (
      <div>
        {bands.map(band => (
          <Musician key={band.id} musician={band} />
        ))}
      </div>
    ) : null
  );
};
