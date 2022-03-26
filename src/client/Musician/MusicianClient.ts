import { endpoints } from '../../core/endpoints';
import fetch from '../../core/FetchService';
import { Musician } from './../../types';

import { formatMusicians, formatMusician } from './formatter';

class MusicianClient {
  async getMusicians(): Promise<Musician[]> {
    const data = await fetch.get({
      url: `${endpoints.bands}`,
    });

    return formatMusicians(data.data.bands)
  }

  async getMusician(id: string): Promise<Musician> {
    const data = await fetch.get({
      url: `${endpoints.bands}/${id}`,
    });

    return formatMusician(data.data.band)
  }

  async getMusicianBands(id: number): Promise<Musician[]> {
    const data = await fetch.get({
      url: `${endpoints.users}/${id}/bands`,
    })

  return formatMusicians(data.data.bands);
  }
}

export const musicianClient = new MusicianClient();

