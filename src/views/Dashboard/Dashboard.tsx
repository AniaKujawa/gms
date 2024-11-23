import React, { FC } from 'react';
import { MusiciansList } from './../../components';
import { Container  } from '@material-ui/core';

import { Welcome } from './../../components';
// import { SearchedTagsContextProvider } from '../../context/SearchedTags';
// import { NextIntlClientProvider,  } from 'next-intl';


export const Dashboard: FC = () => {
  return (
    // <NextIntlClientProvider locale="pl" messages={m}>
      <>
        <Welcome />
        {/* <Container>
          <MusiciansList />
        </Container> */}
      </>
      /* </SearchedTagsContextProvider> */
    // </NextIntlClientProvider>
  )
};
