import React, { FC } from 'react';
import { MusiciansList } from './../../components';


export const Dashboard: FC = () => {
  return (
    <>
      <h1>Welcome in GMS!</h1>
      <MusiciansList />
    </>
  )
};
