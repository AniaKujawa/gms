import { endpoints } from '../../core/endpoints';
import fetch from '../../core/FetchService';
import { Musician } from './../../types';

import { formatMusicians, formatMusician, formatApiMusician } from './formatter';

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
    });

  return formatMusicians(data.data.bands);
  }

  async postMusicianBands(id: number, values: Musician): Promise<Musician> {
    const data = await fetch.post({
      url: `${endpoints.users}/${id}/bands`,
      data: formatApiMusician(values),
    });

  return formatMusician(data.data.band);
  }

  async putMusicianBands(id: number, values: Musician): Promise<Musician> {
    const data = await fetch.put({
      url: `${endpoints.users}/${id}/bands/${values.id}`,
      data: formatApiMusician(values),
    });

  return formatMusician(data.data.band);
  }
}

export const musicianClient = new MusicianClient();

