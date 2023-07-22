import request, { AxiosPromise, AxiosRequestConfig } from 'axios';
import qs from 'qs';


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

  getWithoutAuth(options: AxiosRequestConfig): AxiosPromise {
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
    return this.request({
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
