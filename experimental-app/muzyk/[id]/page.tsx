import { getServerSession } from "next-auth";

import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import { MusicView, MusicViewExtended } from "../../../src/views/MusicView";
import { musicianClient } from '../../../src/client/Musician';


export default async function Page({ params }) {
  const session = await getServerSession(authOptions);
  const musician = await musicianClient.getMusician(params.id);

  if (musician) {
    if (session?.token) {
      return <MusicViewExtended musician={musician} />
    }

    return <MusicView musician={musician} />
  }

  return <p>Music doesn't exist</p>
};