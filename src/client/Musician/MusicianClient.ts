// import { endpoints } from '../../core/endpoints';
import fetch from '../../core/FetchService';
import mockedMusicians from './../../mock/mockedMusicians';
import { Musician } from './../../types';

class MusicianClient {
  // UNDER DEVELOPMENT
  async getMusicians(): Promise<Musician[]> {
    try {
      const data = await fetch.fakeRequest({}, mockedMusicians);

      return data.data
    } catch(e) {
      console.log('Couldn\'t get all musicians', e);
      throw new Error('apiErrors.getMusicians');
    }
  }
}

export const musicianClient = new MusicianClient();

