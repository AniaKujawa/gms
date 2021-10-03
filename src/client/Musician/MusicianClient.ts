// import { endpoints } from '../../core/endpoints';
import fetch from '../../core/FetchService';
import mockedMusicians from './../../mock/mockedMusicians';
import { Musician } from './../../types';

import { formatMusicians, formatMusician } from './formatter';

class MusicianClient {
  // UNDER DEVELOPMENT
  async getMusicians(): Promise<Musician[]> {
    try {
      const data = await fetch.fakeRequest({}, mockedMusicians);

      return formatMusicians(data.data)
    } catch(e) {
      console.log('Couldn\'t get all musicians', e);
      throw new Error('apiErrors.getMusicians');
    }
  }

  async getMusician(id: string): Promise<Musician> {
    try {
      const data = await fetch.fakeRequest({}, mockedMusicians[0]);

      return formatMusician(data.data)
    } catch(e) {
      console.log('Couldn\'t get all musicians', e);
      throw new Error('apiErrors.getMusicians');
    }
  }
}

export const musicianClient = new MusicianClient();

