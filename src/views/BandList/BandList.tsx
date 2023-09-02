import React, { FC } from 'react';
import Link from 'next/link'
import { Container } from '@material-ui/core';

import { MusicianMinimumInfo } from '../../components';
import { MusicianListToolbar } from '../../components/MusicianListToolbar';
import { PATHS } from '../../utils/consts';

import { Props } from './types';

export const BandList: FC<Props> = ({ bands }) => {
  return (
    <Container>
      <MusicianListToolbar />
      {bands && (
        <div>
          {bands.map(band => (
            <Link key={band.id} href={`${PATHS.BANDS}/${band.id}`}>
              <MusicianMinimumInfo musician={band} />
            </Link>
          ))}
        </div>
      )}
    </Container>
  );
};
