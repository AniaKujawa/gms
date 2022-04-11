import { endpoints } from '../../core/endpoints';
import fetch from '../../core/FetchService';
import { Musician, Tag } from './../../types';

import { formatMusicians, formatMusician, formatApiMusician } from './formatter';

class MusicianClient {
  async getMusicians(): Promise<Musician[]> {
    const data = await fetch.get({
      url: endpoints.bands,
    });

    return formatMusicians(data.data.bands)
  }

  async getMusician(id: string): Promise<Musician> {
    const data = await fetch.get({
      url: `${endpoints.bands}/${id}`,
    });

    return formatMusician(data.data.band)
  }

  async getMusicianBands(): Promise<Musician[]> {
    const data = await fetch.get({
      url: endpoints.userBands,
    });

  return formatMusicians(data.data.bands);
  }

  async postMusicianBands(values: Musician): Promise<Musician> {
    const data = await fetch.post({
      url: endpoints.userBands,
      data: formatApiMusician(values),
    });

  return formatMusician(data.data.band);
  }

  async putMusicianBands(values: Musician): Promise<void> {
    await fetch.put({
      url: `${endpoints.userBands}/${values.id}`,
      data: formatApiMusician(values),
    });

  return;
  }

  async activateMusicianBands(id: string): Promise<void> {
    await fetch.put({
      url: `${endpoints.userBands}/${id}/activation`,
    });

  return;
  }

  async deactivateMusicianBands(id: string): Promise<void> {
    await fetch.put({
      url: `${endpoints.userBands}/${id}/deactivation`,
    });

  return;
  }

  async getTags(): Promise<Tag[]> {
    const data = await fetch.get({
      url: endpoints.tags,
    });

  return data.data.tags;
  }
}

export const musicianClient = new MusicianClient();

