import { endpoints } from '../../core/endpoints';
import fetch from '../../core/FetchService';
import { Login, User } from '../../types';

import { parseUser } from './formatter';

class UserClient {
  // UNDER DEVELOPMENT
  async getUsers() {
    try {
      const data = await fetch.get({
        url: endpoints.users
      });
      console.log(data.data);
      return data.data
    } catch(e) {
      console.log('Couldn\'t get all users', e);
      throw new Error('Couldn\'t get all users');
    }
  }

  // UNDER DEVELOPMENT
  async getUser() {
    try {
      const data = await fetch.get({
        url: endpoints.users
      });
      console.log(data.data);
      return data.data
    } catch(e) {
      console.log('Couldn\'t get the user', e);
      throw new Error(`Can't get the user`);
    }
  }

  async registerUser(data: User) {
    try {
      const response = await fetch.post({
        url: endpoints.signIn,
        data: parseUser(data)
      });
      console.log(response.data);
      return response.data
    } catch(e) {
      console.log(`Can't register user`, e);
      throw new Error(`Can't register user`);
    }
  }

  async loginUser(data: Login) {
    try {
      const response = await fetch.post({
        url: endpoints.users,
        data
      });
      console.log(response.data);
      return response.data
    } catch(e) {
      console.log(`Can't login`, e);
      throw new Error(`Can't login, try again later`);
    }
  }
};

export const userClient = new UserClient();