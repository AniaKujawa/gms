import { endpoints } from '../../core/endpoints';
import fetch from '../../core/FetchService';
import { Login, User, UserPayload } from '../../types';
import storage from './../../utils/storage';

import { parseUser } from './formatter';

class UserClient {
  async getUsers() {
    const data = await fetch.get({
      url: endpoints.users
    });

    return data.data.users;
  }

  async getUser(id: number): Promise<User> {
    const data = await fetch.get({
      url: `${endpoints.users}/${id}`
    });

    return data.data.user;
  }

  async registerUser(data: UserPayload) {
    const response = await fetch.postWithoutAuth({
      url: endpoints.users,
      data: parseUser(data)
    });
    storage.setItem('token', response.data.token);
    storage.setItem('user', JSON.stringify(response.data.user));

    return response.data;
  }

  async loginUser(data: Login) {
    const response = await fetch.postWithoutAuth({
      url: endpoints.signIn,
      data: {
        user: data
      }
    });
    storage.setItem('token', response.data.token);
    storage.setItem('user', JSON.stringify(response.data.user));

    return response.data;
  }

  async recoverPassword(email: string) {
    const response = await fetch.postWithoutAuth({
      url: endpoints.signIn,
      data: {
        email
      }
    });

    return response.data;
  }
};

export const userClient = new UserClient();