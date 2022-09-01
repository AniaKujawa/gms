import React, { FC, useState } from 'react';
import { MusiciansList } from './../../components';
import { Container  } from '@material-ui/core';

import { Welcome } from './../../components';


export const Dashboard: FC = () => {
  const [ searchValue, setSearchValue ] = useState('');

  return (
    <>
      <Welcome setSearchValue={setSearchValue} />
      <Container>
        <MusiciansList search={searchValue} />
      </Container>
    </>
  )
};
