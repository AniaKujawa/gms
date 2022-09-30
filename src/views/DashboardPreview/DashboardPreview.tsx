import React, { FC } from 'react';
import { MusiciansList } from './../../components';
import { Container  } from '@material-ui/core';

import { Welcome } from './../../components';
import { SearchedTagsContextProvider } from '../../context/SearchedTags';


export const DashboardPreview: FC = () => {
  return (
    <SearchedTagsContextProvider>
      <Welcome />
      <Container>
        <MusiciansList />
      </Container>
    </SearchedTagsContextProvider>
  )
};
