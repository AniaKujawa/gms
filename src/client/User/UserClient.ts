import { endpoints } from '../../core/endpoints';
import fetch from '../../core/FetchService';
import { User } from '../../types';

import { parseUser } from './formatter';

class UserClient {
  async getUsers() {
    try {
      const data = await fetch.get({
        url: endpoints.users
      });
      console.log(data.data);
      return data.data
    } catch(e){
      console.log('Couldn\'t get all users', e);
    }
  }

  async registerUser(data: User) {
    try {
      const response = await fetch.post({
        url: endpoints.users,
        data: parseUser(data)
      });
      console.log(response.data);
      return response.data
    } catch(e){
      console.log(`Can't register user`, e);
    }
  }
};

export const userClient = new UserClient();