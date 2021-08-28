import { endpoints } from '../../core/endpoints';
import fetch from '../../core/FetchService';
import { Login, User } from '../../types';
import storage from './../../utils/storage';

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
      throw new Error('apiErrors.getUsers');
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
      throw new Error('apiErrors.getUser');
    }
  }

  async registerUser(data: User) {
    try {
      const response = await fetch.postWithoutAuth({
        url: endpoints.users,
        data: parseUser(data)
      });
      storage.setItem('token', response.data.token);

      return response.data
    } catch(e) {
      console.log(`Can't register user`, e);
      throw new Error('apiErrors.register');
    }
  }

  async loginUser(data: Login) {
    try {
      const response = await fetch.postWithoutAuth({
        url: endpoints.signIn,
        data: {
          user: data
        }
      });
      storage.setItem('token', response.data.token);

      return response.data
    } catch(e) {
      console.log(`Can't login`, e);
      throw new Error('apiErrors.login');
    }
  }
};

export const userClient = new UserClient();