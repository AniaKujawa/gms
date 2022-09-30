import { endpoints } from '../../core/endpoints';
import fetch from '../../core/FetchService';
import { Musician, Tag, MusicianImages } from './../../types';

import { formatMusicians, formatMusician, formatApiMusician } from './formatter';

class MusicianClient {
  async getMusicians(search: string): Promise<Musician[]> {
    const data = await fetch.get({
      url: endpoints.bands,
      params: { search },
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

  async postMusicianImages(values: MusicianImages): Promise<Musician> {
    const data = new FormData();
    values.images.map(img => data.append('images[]', img));

    const result = await fetch.post({
      url: `${endpoints.userBands}/${values.id}/images`,
      headers: { 'Content-Type': 'multipart/form-data' },
      data,
    });

    return formatMusician(result.data.band);
  }

  async deleteMusicianImage(musicianId: string, imageId: string): Promise<void> {
    await fetch.delete({
      url: `${endpoints.userBands}/${musicianId}/images/${imageId}`,
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

