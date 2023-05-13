import axios, {AxiosError} from 'axios';

import {getItem} from 'utils';

const api = axios.create({
  baseURL: '',
});

api.interceptors.request.use(async config => {
  const token = await getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const interceptor = api.interceptors.response.use(
  response => {
    return response.data;
  },
  async (error: AxiosError) => {
    const errorStatus = error?.response?.status;

    if (errorStatus === 401 || errorStatus === 403) {
      // dispatch log out action
    }

    return Promise.reject(error);
  },
);

axios.interceptors.request.eject(interceptor);

export {api};
