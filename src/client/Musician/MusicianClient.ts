import { AxiosRequestConfig } from 'axios';
import { endpoints } from '../../core/endpoints';
import fetch from '../../core/FetchService';
import { Musician, Tag, MusicianImages } from './../../types';

import { formatMusicians, formatMusician, formatApiMusician } from './formatter';

class MusicianClient {
  async getMusicians(search: string, options: AxiosRequestConfig): Promise<Musician[]> {
    const data = await fetch.get({
      url: endpoints.bands,
      params: { search },
      ...options
    });

    return formatMusicians(data.data.bands)
  }

  async getMusician(id: string, options: AxiosRequestConfig): Promise<Musician> {
    const data = await fetch.get({
      url: `${endpoints.bands}/${id}`,
      ...options
    });

    return formatMusician(data.data.band)
  }

  async getServerMusician(id: string): Promise<Musician> {
    const data = await fetch.getWithoutAuth({
      url: `${endpoints.bands}/${id}`,
    });

    return formatMusician(data.data.band)
  }

  async getMusicianBands(options: AxiosRequestConfig): Promise<Musician[]> {
    const data = await fetch.get({
      url: endpoints.userBands,
      ...options
    });

    return formatMusicians(data.data.bands);
  }

  async postMusicianBands(values: Musician, options: AxiosRequestConfig): Promise<Musician> {
    const data = await fetch.post({
      url: endpoints.userBands,
      data: formatApiMusician(values),
      ...options
    });

    return formatMusician(data.data.band);
  }

  async putMusicianBands(values: Musician, options: AxiosRequestConfig): Promise<void> {
    await fetch.put({
      url: `${endpoints.userBands}/${values.id}`,
      data: formatApiMusician(values),
      ...options
    });

    return;
  }

  async activateMusicianBands(id: string, options: AxiosRequestConfig): Promise<void> {
    await fetch.put({
      url: `${endpoints.userBands}/${id}/activation`,
      ...options
    });

    return;
  }

  async postMusicianImages(values: MusicianImages, options: AxiosRequestConfig): Promise<Musician> {
    const data = new FormData();
    values.images.map(img => data.append('images[]', img));

    const result = await fetch.post({
      url: `${endpoints.userBands}/${values.id}/images`,
      headers: { 'Content-Type': 'multipart/form-data', ...options.headers },
      data,
    });

    return formatMusician(result.data.band);
  }

  async deleteMusicianImage(musicianId: string, imageId: string, options: AxiosRequestConfig): Promise<void> {
    await fetch.delete({
      url: `${endpoints.userBands}/${musicianId}/images/${imageId}`,
      ...options
    });

    return;
  }

  async deactivateMusicianBands(id: string, options: AxiosRequestConfig): Promise<void> {
    await fetch.put({
      url: `${endpoints.userBands}/${id}/deactivation`,
      ...options
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

