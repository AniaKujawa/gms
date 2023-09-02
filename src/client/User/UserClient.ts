import { AxiosRequestConfig } from 'axios';
import { endpoints } from '../../core/endpoints';
import fetch from '../../core/FetchService';
import { Login, UpdateUser, User, UserPayload } from '../../types';
import storage from './../../utils/storage';

import { parseUser, formatUserData, parseUpdateUser } from './formatter';

class UserClient {
  async getUsers() {
    const data = await fetch.get({
      url: endpoints.users
    });

    return data.data.users;
  }

  async getUser(options: AxiosRequestConfig): Promise<User> {
    const data = await fetch.get({
      url: endpoints.profile,
      ...options
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

    return { accessToken: response.data.token, user: formatUserData(response.data.user) };
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

  async uploadAvatar(avatar: File, options: AxiosRequestConfig) {
    const data = new FormData();
    data.append('avatar', avatar);

    const response = await fetch.post({
      url: endpoints.avatar,
      headers: { 'Content-Type': 'multipart/form-data', ...options.headers },
      data,
    });

    return response.data;
  }

  async updateUser(user: UpdateUser, options: AxiosRequestConfig): Promise<User> {
    const response = await fetch.put({
      url: endpoints.profile,
      data: parseUpdateUser(user),
      ...options
    });

    return formatUserData(response.data.user);
  }
};

export const userClient = new UserClient();