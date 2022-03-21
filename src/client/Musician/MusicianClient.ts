import { endpoints } from '../../core/endpoints';
import fetch from '../../core/FetchService';
import mockedMusicians from './../../mock/mockedMusicians';
import { Musician } from './../../types';

import { formatMusicians, formatMusician } from './formatter';

class MusicianClient {
  // UNDER DEVELOPMENT
  async getMusicians(): Promise<Musician[]> {
    const data = await fetch.fakeRequest({}, mockedMusicians);

    return formatMusicians(data.data)
  }

  async getMusician(id: string): Promise<Musician> {
    const data = await fetch.fakeRequest({}, mockedMusicians[0]);

    return formatMusician(data.data)
  }

  async getMusicianBands(id: number): Promise<Musician[]> {
    const data = await fetch.get({
      url: `${endpoints.users}/${id}/bands`,
    })

  return formatMusicians(data.data.bands);
  }
}

export const musicianClient = new MusicianClient();

