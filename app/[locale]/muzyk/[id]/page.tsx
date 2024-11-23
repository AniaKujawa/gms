import React from "react";
import { getServerSession } from "next-auth";

import { authOptions } from "../../../../pages/api/auth/[...nextauth]";
import { MusicView, MusicViewExtended } from "../../../../src/views/MusicView";
import { musicianClient } from '../../../../src/client/Musician';

interface IProps {
  params: {
    id: string;
  }
}

export default async function Page({ params }: IProps) {
  const session = await getServerSession(authOptions);
  const musician = await musicianClient.getMusician(params.id, {});

  console.log(musician, session);

  if (musician) {
    if (session?.token) {
      return <MusicViewExtended musician={musician} />
    }

    return <MusicView musician={musician} />
  }

  return <p>Music doesn't exist</p>
};