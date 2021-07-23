import request, { AxiosPromise, AxiosRequestConfig } from 'axios';
import qs from 'qs';

import storage from './../utils/storage';

const AUTH_KEY = 'TOKEN';

class FetchService {
  serializeParams(params: URLSearchParams) {
    return qs.stringify(params, { arrayFormat: 'brackets' });
  }

  attachHeaders(options: AxiosRequestConfig) {
    const token = storage.getItem(AUTH_KEY);

    return {
      ...options,
      paramsSerializer: (params: URLSearchParams) => this.serializeParams(params),
      headers: {
        ...options.headers,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization:  token && 'Token' + token
      },
      withCredentials: true,
    };
  }

  request(options: AxiosRequestConfig): AxiosPromise {
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
