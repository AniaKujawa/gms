import { endpoints } from '../../core/endpoints';
import fetch from '../../core/FetchService';
import { Login, User } from '../../types';
import storage from './../../utils/storage';

import { parseUser } from './formatter';

class UserClient {
  // UNDER DEVELOPMENT
  async getUsers() {
    const data = await fetch.get({
      url: endpoints.users
    });
    console.log(data.data);
    return data.data
  }

  // UNDER DEVELOPMENT
  async getUser() {
    const data = await fetch.get({
      url: endpoints.users
    });
    console.log(data.data);
    return data.data
  }

  async registerUser(data: User) {
    const response = await fetch.postWithoutAuth({
      url: endpoints.users,
      data: parseUser(data)
    });
    storage.setItem('token', response.data.token);

    return response.data
  }

  async loginUser(data: Login) {
    const response = await fetch.postWithoutAuth({
      url: endpoints.signIn,
      data: {
        user: data
      }
    });
    storage.setItem('token', response.data.token);

    return response.data
  }

  async recoverPassword(email: string) {
    const response = await fetch.postWithoutAuth({
      url: endpoints.signIn,
      data: {
        email
      }
    });

    return response.data
  }
};

export const userClient = new UserClient();