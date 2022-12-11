import { endpoints } from '../../core/endpoints';
import fetch from '../../core/FetchService';
import { Login, User, UserPayload } from '../../types';
import storage from './../../utils/storage';

import { parseUser, formatUserData, parseUpdateUser } from './formatter';

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

    return formatUserData(data.data.user);
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

  async uploadAvatar(avatar: File) {
    const data = new FormData();
    data.append('avatar', avatar);

    const response = await fetch.post({
      url: endpoints.avatar, 
      headers: { 'Content-Type': 'multipart/form-data' },
      data,
    });

    return response.data;
  }

  async updateUser(user: Pick<UserPayload, 'firstName' | 'lastName' | 'name'>): Promise<User> {
    const response = await fetch.put({
      url: `${endpoints.profile}`,
      data: parseUpdateUser(user),
    });

    return formatUserData(response.data.user);
  }
};

export const userClient = new UserClient();