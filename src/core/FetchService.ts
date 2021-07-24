import request, { AxiosPromise, AxiosRequestConfig } from 'axios';
import qs from 'qs';

import storage from './../utils/storage';

const AUTH_KEY = 'TOKEN';

class FetchService {
  serializeParams(params: URLSearchParams) {
    return qs.stringify(params, { arrayFormat: 'brackets' });
  }

  attachHeaders(options: AxiosRequestConfig) {
    return {
      ...options,
      paramsSerializer: (params: URLSearchParams) => this.serializeParams(params),
      headers: {
        ...options.headers,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  }

  auth(options: AxiosRequestConfig) {
    const token = storage.getItem(AUTH_KEY);

    if(token) {
      return {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`
        }
      }
    }

    return options;
  }

  request(options: AxiosRequestConfig): AxiosPromise {
    const optionsWithHeader = this.attachHeaders(options);
    const optionsWithAuth = this.auth(optionsWithHeader);

    return request(optionsWithAuth);
  }

  requestWithoutAuth(options: AxiosRequestConfig): AxiosPromise {
    const optionsWithHeader = this.attachHeaders(options);

    return request(optionsWithHeader);
  }

  get(options: AxiosRequestConfig): AxiosPromise {
    return this.request({
      ...options,
      method: 'GET'
    });
  }

  post(options: AxiosRequestConfig): AxiosPromise {
    return this.request({
      ...options,
      method: 'POST'
    });
  }

  postWithoutAuth(options: AxiosRequestConfig): AxiosPromise {
    return this.requestWithoutAuth({
      ...options,
      method: 'POST'
    });
  }

  patch(options: AxiosRequestConfig): AxiosPromise {
    return this.request({
      ...options,
      method: 'PATCH'
    });
  }

  delete(options: AxiosRequestConfig): AxiosPromise {
    return this.request({
      ...options,
      method: 'DELETE'
    });
  }
}

const instance = new FetchService();

export default instance;
