import request, { AxiosPromise, AxiosRequestConfig } from 'axios';
import qs from 'qs';

import storage from './../utils/storage';

const AUTH_KEY = 'token';

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

  put(options: AxiosRequestConfig): AxiosPromise {
    return this.request({
      ...options,
      method: 'PUT'
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

  fakeRequest(options = {}, response: Record<any, any>, error = false): AxiosPromise {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (error === false) {
          resolve({
            config: {},
            headers: {},
            status: 200,
            statusText: 'Success',
            data: response,
          });
        } else {
          reject({ error });
        }
      }, 500);
    });
  }
}

const instance = new FetchService();

export default instance;
